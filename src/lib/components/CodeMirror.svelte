<script lang="ts">
  import { basicSetup, EditorView } from "codemirror";
  import { createEventDispatcher, onMount } from "svelte";
  import { markdown } from "@codemirror/lang-markdown";
  import { languages } from "@codemirror/language-data";

  export let doc: string;
  let cmEditor: HTMLElement;
  const dispatcher = createEventDispatcher();

  onMount(() => {
    const ev = new EditorView({
      doc,
      extensions: [
        basicSetup,
        EditorView.lineWrapping,
        markdown({ codeLanguages: languages }),
      ],
      parent: cmEditor,
      dispatch: (tr) => {
        ev.update([tr]);
        dispatcher("update", {
          doc: ev.state.doc.toJSON(),
        });
      },
    });
  });
</script>

<div name="cmEditor" bind:this={cmEditor} />
