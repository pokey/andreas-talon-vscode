type Category = "File" | "Edit" | "Nav" | "Git" | "Other";

interface CommandDescription {
    readonly isVisible: boolean;
    readonly category: Category;
    readonly title: string;
    readonly description: string;
    readonly args: string;
}

function create(
    isVisible: boolean,
    category: Category,
    title: string,
    description?: string,
    args?: string
): CommandDescription {
    return {
        isVisible,
        category,
        title,
        description: title + (description ? ` ${description}` : ""),
        args: args ?? "()"
    };
}

function visible(category: Category, title: string, description?: string, args?: string) {
    return create(true, category, title, description, args);
}

function hidden(category: Category, title: string, description?: string, args?: string) {
    return create(false, category, title, description, args);
}

export const commandDescriptions = {
    // File commands
    getFilename: hidden("File", "Get filename of active file.", undefined, "(): string"),
    copyFilename: visible("File", "Copy filename of active file to clipboard."),
    newFile: visible(
        "File",
        "Create new file.",
        "Uses selected text and current file extension as suggestion.",
        "(name?: string)"
    ),
    duplicateFile: visible(
        "File",
        "Create duplicate/copy of active file.",
        undefined,
        "(name?: string)"
    ),
    renameFile: visible("File", "Rename active file.", undefined, "(name?: string)"),
    removeFile: visible("File", "Remove/delete the active file."),
    moveFile: visible("File", "Move active file to new directory."),
    // Edit commands
    generateRange: visible(
        "Edit",
        "Generate numerical range.",
        "Starts from 1 by default",
        "(start: number = 1)"
    ),
    increment: visible("Edit", "Increment selected number."),
    decrement: visible("Edit", "Decrement selected number."),
    // Navigation commands
    openEditorAtIndex: hidden(
        "Nav",
        "Open editor/tab at given index.",
        "Negative indices are counted from the back.",
        "(index: number)"
    ),
    selectTo: hidden(
        "Nav",
        "Select from current location to specified line.",
        undefined,
        "(line: number)"
    ),
    lineMiddle: visible("Nav", "Move curser to middle of the current line."),
    // Git commands
    getGitFileURL: hidden(
        "Git",
        "Get URL to Git repository file webpage.",
        "Optionally include selected line numbers.",
        "({ useSelection: boolean, useBranch: boolean }): string"
    ),
    getGitRepoURL: hidden("Git", "Get URL to Git repository webpage.", undefined, "(): string"),
    getGitIssuesURL: hidden(
        "Git",
        "Get URL to Git repository issues webpage.",
        undefined,
        "(): string"
    ),
    getGitNewIssueURL: hidden(
        "Git",
        "Get URL to Git repository new issue webpage.",
        undefined,
        "(): string"
    ),
    getGitPullRequestsURL: hidden(
        "Git",
        "Get URL to Git repository pull requests webpage.",
        undefined,
        "(): string"
    ),
    // Other commands
    getSelectedText: hidden("Other", "Get selected text.", undefined, "(): string[]"),
    getClassName: hidden(
        "Other",
        "Get class name.",
        "Useful for inserting constructors in C++/Java.",
        "(): string"
    ),
    getDictationContext: hidden(
        "Other",
        "Get text before and after selection.",
        "Used for context sensitive dictation.",
        "(): {before: string, after: string}"
    ),
    executeCommands: hidden(
        "Other",
        "Sequentially execute multiple commands.",
        "Useful for keybindings.",
        "(commands: string[])"
    ),
    printCommands: visible("Other", "Print available commands.")
} as const;

export type CommandIds = keyof typeof commandDescriptions;