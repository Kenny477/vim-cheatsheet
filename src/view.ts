import * as vscode from 'vscode';
import { commands } from './commands';

export class VimCommandTreeDataProvider implements vscode.TreeDataProvider<VimCommandTreeItem> {

  // private _onDidChangeTreeData: vscode.EventEmitter<VimCommandTreeItem | undefined> = new vscode.EventEmitter<VimCommandTreeItem | undefined>();
  // readonly onDidChangeTreeData: vscode.Event<VimCommandTreeItem | undefined> = this._onDidChangeTreeData.event;

  // refresh(): void {
  //   this._onDidChangeTreeData.fire();
  // }

  getTreeItem(element: VimCommandTreeItem): vscode.TreeItem | Thenable<vscode.TreeItem> {
    return element;
  }

  getChildren(element?: VimCommandTreeItem): VimCommandTreeItem[] | Thenable<VimCommandTreeItem[]> {
    if (element) {
      return element.getChildren();
    } else {
      return this.getVimCommands();
    }
  }

  private getVimCommands(): VimCommandTreeItem[] {
    const sections = [];
    for (const section in commands) {
      const children = commands[section].map(command => {
        return new VimCommandTreeItem(command.command, command.description, vscode.TreeItemCollapsibleState.None, []);
      });
      const s = new VimCommandTreeItem(section, '', vscode.TreeItemCollapsibleState.Expanded, children);
      sections.push(s);
    }
    return sections;
  }
}

class VimCommandTreeItem extends vscode.TreeItem {
  constructor(
    public readonly label: string,
    public readonly description: string,
    public readonly collapsibleState: vscode.TreeItemCollapsibleState,
    public readonly children: VimCommandTreeItem[]
  ) {
    super(label, collapsibleState);
    this.description = description;
    this.children = children;
  }

  getChildren(): VimCommandTreeItem[] {
    return this.children;
  }
}