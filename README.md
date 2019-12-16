# VS Code wxSmartFiles extension

This is an extension that helps you automate the generation of applet file structures.

Forked from [wx-smart-file](https://github.com/haoxinjieFE/vscode-extension-wxSmartFile).

## how to use

- Search through the app store wx-smart-files and install it by app store search
- command + shift + p, Start: this extension is work  Stop: this extension stop work;

## Settings Options

This extension contributes the following variables to the settings.
- `wxSmartFiles.enabled`: enable/disable wx-smart-files, default: `false`
- `wxSmartFiles.baseUrl`: main source code folder, default: `''`
- `wxSmartFiles.path`: watching pages folder, default: `pages`
- `wxSmartFiles.componentPath`: watching components folder, default: `components`
- `wxSmartFiles.templateDir`: template folder, it's must be in project root folder
- `wxSmartFiles.fileName`: filled template file name, default: current folder name

## It looks like:

![](https://lc-vkpyiowl.cn-n1.lcfile.com/db15cc75c05eeb3773b2.gif)

### Tips

- windows compatibility may be problematic, wait patiently
- This extension may not works smartly when you modify you existed files, so we advice you to use it for creating pages or components.
