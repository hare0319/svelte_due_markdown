<script lang="ts">
  import CodeMirror from "$lib/components/CodeMirror.svelte";
  import ProseMirror from "$lib/components/ProseMirror/index.svelte";

  const doc = `
# Heading 1

Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea eius similique, laborum quisquam quae id hic exercitationem quibusdam officia fugiat itaque qui iusto earum ipsum tenetur odit perferendis eos placeat?

## Heading 1-1

Quasi laborum mollitia architecto vero quisquam, numquam illum, facilis quaerat, quam dolorum similique magnam pariatur dolore ab natus provident reprehenderit officiis id impedit illo accusantium. Ad facere accusamus minima quas.

\`\`\` javascript
import * as Lib from "lib";

const a = 'abc';

Lib.charge(a);

(()=>{
  console.log(Lib.fetch(a));
})()

\`\`\`

## Heading 1-2

Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis non commodi sapiente alias numquam dolore omnis hic nesciunt fugiat aperiam. Illum commodi quaerat nam, architecto officia maiores! Assumenda, eaque atque.

# Heading 2

Repellendus, praesentium adipisci laborum dignissimos a perspiciatis veniam architecto odio unde ratione id, ex tenetur tempora labore, neque quisquam! Quia perferendis, minima corporis in at facilis nulla non esse amet?
  `;

  let lines: string[] = [];
</script>

<h1>Welcome to SvelteKit</h1>
<p>
  Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation
</p>

<div>
  <div class="textBlock" style="fload: left">
    <CodeMirror
      {doc}
      on:update={(event) => {
        lines = event.detail.doc;
      }}
    />
  </div>

  <div class="textBlock">
    <!-- {#if lines.length > 0}
      {#each lines as line}
        <p>{line}</p>
      {/each}
    {/if} -->
    <ProseMirror {doc} />
  </div>
</div>

<style>
  .textBlock {
    width: 40%;
    position: relative;
    float: left;
    font-family: "Comic Sans MS", cursive;
    margin: 1em;
    padding: 0.5em;
  }
</style>
