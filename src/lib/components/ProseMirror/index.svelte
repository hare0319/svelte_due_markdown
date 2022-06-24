<script lang="ts">
  import { onMount } from "svelte";
  import { ProseMirrorView } from "./ProseMirror";
  import "./menu.css";

  export let doc: string;
  let pmEditor: HTMLElement;

  onMount(() => {
    new ProseMirrorView(pmEditor, doc);
  });
</script>

<div id="pmEditor" bind:this={pmEditor} />
