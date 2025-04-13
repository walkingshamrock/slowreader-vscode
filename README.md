# SlowReader

[![VSCode Marketplace](https://img.shields.io/visual-studio-marketplace/v/walkingshamrock.slowreader-vscode.svg?label=VSCode%20Marketplace)](https://marketplace.visualstudio.com/items?itemName=walkingshamrock.slowreader-vscode)
[![Installs](https://img.shields.io/visual-studio-marketplace/i/walkingshamrock.slowreader-vscode.svg)](https://marketplace.visualstudio.com/items?itemName=walkingshamrock.slowreader-vscode)

SlowReader is a Visual Studio Code extension that reveals text one character at a time, simulating a typewriter-style animation. This extension is useful for presentations, live coding, tutorials, or simply adding a visual effect to your editing experience.

We truly appreciate your support. Your generosity encourages us to keep improving SlowReader and helps sustain its ongoing development.

[![Buy Me A Coffee](https://img.shields.io/badge/-Buy%20me%20a%20coffee-yellow?style=for-the-badge&logo=buy-me-a-coffee&logoColor=white)](https://www.buymeacoffee.com/walkingshamrock)

## Features

- Typewriter-style animation of text in the active editor
- Customizable delay between character displays
- Manual cancel support via Command Palette
- Instantly reveal remaining text when animation is cancelled

## Usage

1. Open a text file in the editor
2. Run the command `SlowReader: Start Typing Animation` from the Command Palette
3. To cancel the animation and show the rest of the text immediately, run:
   - `SlowReader: Cancel Typing Animation`

## Configuration

You can customize the delay between characters by updating your settings:

```json
"slowreader.delay": 80
```

This value is specified in milliseconds.

## Commands

| Command                                | Description                                      |
|----------------------------------------|--------------------------------------------------|
| `SlowReader: Start Typing Animation`   | Start animating the visible text in the editor   |
| `SlowReader: Cancel Typing Animation`  | Cancel the animation and show the full content   |

## Requirements

- Visual Studio Code version 1.85.0 or newer

## Release Notes

### 0.1.0

- Initial release with typewriter animation
- Configurable delay setting
- Manual cancel support

## Additional Resources

- [Extension Guidelines](https://code.visualstudio.com/api/references/extension-guidelines)
- [VS Code Markdown Support](http://code.visualstudio.com/docs/languages/markdown)
- [Markdown Syntax Reference](https://help.github.com/articles/markdown-basics/)

Thank you for using SlowReader.
