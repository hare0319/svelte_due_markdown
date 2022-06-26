<script lang="ts">
  import { onMount } from "svelte";
  import { ProseMirrorView } from "./ProseMirror";
  import { createEventDispatcher } from "svelte";

  import "./menu.css";
  import "./prosemirror.css";

  const dispatcher = createEventDispatcher();

  export let doc: string;
  // export let ev: ProseMirrorView;

  let pmEditor: HTMLElement;
  const setDetail = (v: Record<string, string>) => dispatcher("update", v);

  onMount(() => {
    const ev = new ProseMirrorView(pmEditor, doc, setDetail);
  });
</script>

<div id="pmEditor" bind:this={pmEditor} />
