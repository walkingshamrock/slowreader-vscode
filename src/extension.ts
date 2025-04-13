import * as vscode from 'vscode';

let cancelAnimation = false;

export function activate(context: vscode.ExtensionContext) {
  const disposable = vscode.commands.registerCommand('slowreader.start', async () => {
    cancelAnimation = false;

    const config = vscode.workspace.getConfiguration('slowreader');
    const delay = config.get<number>('delay', 80);
    const editor = vscode.window.activeTextEditor;
    if (!editor) {
      vscode.window.showInformationMessage('No active editor!');
      return;
    }

    const document = editor.document;
    const originalText = document.getText();

    // Step 1: Clear the editor content
    await editor.edit(editBuilder => {
      const start = new vscode.Position(0, 0);
      const end = document.lineAt(document.lineCount - 1).range.end;
      editBuilder.delete(new vscode.Range(start, end));
    });

    // Step 2: Simulate typing each character
    let currentOffset = 0;

    cancelAnimation = false;

    for (const char of originalText) {
      if (cancelAnimation) {
        await editor.edit(editBuilder => {
          const start = new vscode.Position(0, 0);
          const end = document.lineAt(document.lineCount - 1).range.end;
          editBuilder.delete(new vscode.Range(start, end));
          editBuilder.insert(start, originalText);
        });
        return;
      }

      const pos = editor.document.positionAt(currentOffset);

      await editor.edit(editBuilder => {
        editBuilder.insert(pos, char);
      });

      currentOffset += 1;

      const newPos = editor.document.positionAt(currentOffset);
      editor.selection = new vscode.Selection(newPos, newPos);

      const isVisible = editor.visibleRanges.some(r => r.contains(newPos));
      if (!isVisible) {
        editor.revealRange(
          new vscode.Range(newPos, newPos),
          vscode.TextEditorRevealType.InCenterIfOutsideViewport
        );
      }

      await new Promise(resolve => setTimeout(resolve, delay));
    }
  });

  const cancelCommand = vscode.commands.registerCommand('slowreader.cancel', () => {
    cancelAnimation = true;
  });

  context.subscriptions.push(disposable);
  context.subscriptions.push(cancelCommand);
}