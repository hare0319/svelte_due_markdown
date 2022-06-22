<script lang="ts">
  import { basicSetup, EditorView } from "codemirror";
  import { createEventDispatcher, onMount } from "svelte";

  export let doc: string;
  let cmEditor: HTMLElement;
  const dispatcher = createEventDispatcher();

  onMount(() => {
    const ev = new EditorView({
      doc,
      extensions: [basicSetup, EditorView.lineWrapping],
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
