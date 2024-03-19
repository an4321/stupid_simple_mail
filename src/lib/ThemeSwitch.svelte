<script lang="ts">
import { BigSwitch } from "$lib/components/ui/switch";
import { onMount } from 'svelte';

let darkMode = true;

function handleSwitchDarkMode() {
    darkMode = !darkMode;
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark', darkMode);
}

onMount(() => {
    const storedTheme = localStorage.getItem('theme');
    darkMode = storedTheme === 'dark' || (storedTheme !== 'light' && window.matchMedia('(prefers-color-scheme: dark)').matches);
    document.documentElement.classList.toggle('dark', darkMode);
});
</script>

<div>
    <BigSwitch
        id="theme-toggle"
        checked={darkMode}
        on:click={handleSwitchDarkMode}
    />
    <label for="theme-toggle">
        <span class="switch"></span>
    </label>
</div>
