<script lang="ts">
    const {data} = $props();
</script>

{#each data.todos as todo}
    <li>{todo.id} x {todo.text}</li>
{/each}