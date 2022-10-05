import { window } from "vscode";
import getSortedSelections from "./util/getSortedSelections";

export default async (start: number = 0) => {
    const editor = window.activeTextEditor;

    if (!editor) {
        return;
    }

    const wereEditsApplied = await editor.edit((editBuilder) => {
        getSortedSelections().forEach((selection, i) => {
            const text = (start + i).toString();
            editBuilder.replace(selection, text);
        });
    });

    if (!wereEditsApplied) {
        throw Error("Couldn't apply edits for generate range");
    }
};
