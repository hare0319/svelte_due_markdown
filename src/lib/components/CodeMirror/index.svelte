<script lang="ts">
  import { createEventDispatcher, onMount } from "svelte";
  import { CodeMirrorView } from "./CodeMirror";

  const dispatcher = createEventDispatcher();

  export let doc: string;
  // export let ev: CodeMirrorView;

  let cmEditor: HTMLElement;
  const setDetail = (v: Record<string, string>) => dispatcher("update", v);

  onMount(() => {
    const ev = new CodeMirrorView(cmEditor, doc, setDetail);
  });
</script>

<div id="cmEditor" bind:this={cmEditor} />