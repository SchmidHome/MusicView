<script lang="ts">
  import Song from "./Song.svelte";
  import queue from "global/queue";
  export let displayedSongs = 5;
</script>

<div class="wrapper">
  <h2 class="header">Queue</h2>
  {#if $queue.length === 0}
    <h2 class="no-queue">Keine Songs in Queue</h2>
  {/if}
  {#each Array.from({ length: displayedSongs }) as _, index}
    {#if $queue[index]}
      <Song song={$queue[index]} />
    {:else}
      <div class="empty" />
    {/if}
  {/each}
  {#if $queue.length > displayedSongs}
    <div class="more">
      <span>+{$queue.length - displayedSongs}</span>
    </div>
  {/if}
</div>

<style lang="sass">
  .wrapper
    display: flex
    flex-direction: column
    align-items: center
    width: 100%
    flex-grow: 1
    position: relative

  .header
    background: $bg-light
    color: $text
    width: 100%
    text-align: center
    padding: calc($spacing * 2)
    font-size: 1.5rem
    margin: 0
    border-radius: $border-radius
    box-shadow: $shadow
    box-sizing: border-box
    @media screen and (orientation: landscape)
      display: none
    
  
  .empty
    flex: 1 1 0
  
  .no-queue
    color: $text
    text-align: center
    width: 100%
    margin-top: $spacing
    padding: $spacing
  
  .more
    --size: 3vmax
    position: absolute
    bottom: calc(var(--size) / -2)
    right: calc(50% - (var(--size) / 2))
    width: var(--size)
    height: var(--size)
    background: $bg2
    display: flex
    justify-content: center
    align-items: center
    border-radius: 50%
    box-shadow: $shadow
    font-size: calc(var(--size) / 3)

</style>
