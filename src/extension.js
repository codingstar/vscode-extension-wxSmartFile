const vscode = require("vscode");
const wxSmartFiles = require("./wxSmartFiles.js");

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
  context.subscriptions.push(
    vscode.commands.registerCommand("wxSmartFiles.init", () => {
      wxSmartFiles.init(1);
    })
  );
  context.subscriptions.push(
    vscode.commands.registerCommand("wxSmartFiles.stop", () => {
      try {
        if (wxSmartFiles.fileWatch() && wxSmartFiles.watch()) {
          wxSmartFiles.fileWatch().dispose();
          wxSmartFiles.watch().dispose();
        }
      } catch (e) {
        console.log(e);
      }
      vscode.window.showErrorMessage(
        "wx-smart-files 已经停止运行在您的 vscode 上"
      );
    })
  );
  context.subscriptions.push(
    vscode.commands.registerCommand("wxSmartFiles.debugPage", url => {
      wxSmartFiles.debugPage(url.path);
    })
  );
  context.subscriptions.push(wxSmartFiles.fileWatch());
  context.subscriptions.push(wxSmartFiles.watch());
}

function deactivate() {
  wxSmartFiles.fileWatch().dispose();
  wxSmartFiles.watch().dispose();
}

module.exports = {
  activate,
  deactivate
};
