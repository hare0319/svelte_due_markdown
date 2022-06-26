<script lang="ts">
  import CodeMirror from "$lib/components/CodeMirror/index.svelte";
  import ProseMirror from "$lib/components/ProseMirror/index.svelte";

  let doc = `
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
  let edSelector: boolean = false;
  let switcherLb: string;

  $: switcherLb = edSelector ? "CM" : "PM";
</script>

<h1>Welcome to SvelteKit</h1>
<p>
  Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation
</p>

<div>
  <label class="switch">
    <input type="checkbox" bind:checked={edSelector} />
    <span class="slider round" />
  </label>
  {switcherLb} is selected
</div>

<div>
  {#if edSelector}
    <div class="textBlock" style="fload: left">
      <CodeMirror
        {doc}
        on:update={(event) => {
          doc = event.detail.doc;
        }}
      />
    </div>
  {:else}
    <div class="textBlock">
      <!-- {#if lines.length > 0}
      {#each lines as line}
        <p>{line}</p>
      {/each}
    {/if} -->
      <ProseMirror
        {doc}
        on:update={(event) => {
          doc = event.detail.doc;
        }}
      />
    </div>
  {/if}
  <div class="textBlock">{doc}</div>
</div>

<style>
  .textBlock {
    width: 40%;
    height: 400px;
    overflow: scroll;
    position: relative;
    float: left;
    font-family: "Comic Sans MS", cursive;
    margin: 1em;
    padding: 0.5em;
  }
  .switch {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
  }

  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  .slider::before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  input:checked + .slider {
    background-color: #2196f3;
  }

  input:focus + .slider {
    box-shadow: 0 0 1px #2196f3;
  }

  input:checked + .slider::before {
    -webkit-transform: translate(26px);
    -ms-transform: translate(26px);
    transform: translate(26px);
  }

  .slider.round {
    border-radius: 34px;
  }

  .slider.round::before {
    border-radius: 50%;
  }
</style>
