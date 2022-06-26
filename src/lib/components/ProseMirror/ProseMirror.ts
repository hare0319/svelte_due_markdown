import { EditorView } from "prosemirror-view";
import { EditorState } from "prosemirror-state";
import {
  schema,
  defaultMarkdownParser,
  defaultMarkdownSerializer,
} from "prosemirror-markdown";
import { exampleSetup } from "prosemirror-example-setup";

export class ProseMirrorView {
  view: EditorView;

  constructor(
    target: HTMLElement,
    content: string,
    evtSetter: (v: Record<string, string>) => void
  ) {
    this.view = new EditorView(target, {
      state: EditorState.create({
        doc: defaultMarkdownParser.parse(content) ?? undefined,
        plugins: exampleSetup({ schema }),
      }),
      dispatchTransaction: (tr) => {
        this.view.updateState(this.view.state.apply(tr));
        evtSetter({
          doc: this.content,
        });
      },
    });
  }

  get content() {
    return defaultMarkdownSerializer.serialize(this.view.state.doc);
  }

}
