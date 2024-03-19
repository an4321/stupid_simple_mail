<script lang="ts">

import ThemeSwitch from '$lib/ThemeSwitch.svelte';
import Nav from '$lib/components/nav.svelte';

</script>

<div class="my-20 mx-6 md:mx-24 p-6 md:p-24 bg-secondary rounded-lg relative">
    <div class="absolute top-0 right-0 mt-4 md:mt-6 mr-1 md:mr-0 rotate-45 md:rotate-90">
        <ThemeSwitch />
    </div>
    <h1 class="text-primary text-6xl md:text-7xl font-bold">
        Stupid Simple Mail
    </h1>
    <br>
    <h2 class="text-secondary-foreground text-xl md:text-5xl font-semibold md:w-5/6">
        Build Your Community, <br/> One Newsletter at a Time.
    </h2>
    <button class="sign-btn mt-8" >
        Sign in
        <div class="arrow-wrapper">
            <div class="arrow"></div>
        </div>
    </button>
</div>

<Nav />

<style>
.sign-btn {
    --primary-color: #E11D48;
    --secondary-color: #fff;
    --hover-color: #CF1E45;
    --arrow-width: 10px;
    --arrow-stroke: 2px;
    box-sizing: border-box;
    border: 0;
    border-radius: 20px;
    color: var(--secondary-color);
    padding: 1em 1.8em;
    background: var(--primary-color);
    display: flex;
    transition: 0.2s background;
    align-items: center;
    gap: 0.6em;
    font-weight: bold;
}

.sign-btn .arrow-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
}

.sign-btn .arrow {
    margin-top: 1px;
    width: var(--arrow-width);
    background: var(--primary-color);
    height: var(--arrow-stroke);
    position: relative;
    transition: 0.2s;
}

.sign-btn .arrow::before {
    content: "";
    box-sizing: border-box;
    position: absolute;
    border: solid var(--secondary-color);
    border-width: 0 var(--arrow-stroke) var(--arrow-stroke) 0;
    display: inline-block;
    top: -3px;
    right: 3px;
    transition: 0.2s;
    padding: 3px;
    transform: rotate(-45deg);
}

.sign-btn:hover {
    background-color: var(--hover-color);
}

.sign-btn:hover .arrow {
    background: var(--secondary-color);
}

.sign-btn:hover .arrow:before {
    right: 0;
}
</style>
