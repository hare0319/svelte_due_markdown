import { basicSetup, EditorView } from "codemirror";
import { markdown } from "@codemirror/lang-markdown";
import { languages } from "@codemirror/language-data";

export class CodeMirrorView {
  view: EditorView;

  constructor(
    target: HTMLElement,
    content: string,
    evtSetter: (v: Record<string, string>) => void
  ) {
    this.view = new EditorView({
      doc: content,
      extensions: [
        basicSetup,
        EditorView.lineWrapping,
        markdown({ codeLanguages: languages }),
      ],
      parent: target,
      dispatch: (tr) => {
        this.view.update([tr]);
        evtSetter({
          doc: this.view.state.doc.toJSON().join("\n"),
        });
      },
    });
  }
}
