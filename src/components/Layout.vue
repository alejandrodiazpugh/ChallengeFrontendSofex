<script setup lang="ts">

// Crear array para iconos y nombres del nav
const sideNavIcons = [
    { name: 'dashboard', url: '/images/layout.svg', active: false },
    { name: 'bookmark', url: '/images/bookmark_border_black_24dp.svg', active: false },
    { name: 'work', url: '/images/work_outline_black_24dp.svg', active: true },
    { name: 'zap', url: '/images/zap.svg', active: false },
    { name: 'trending', url: '/images/trending-up.svg', active: false },
];

const topNavIcons = [
    {name: 'notifications', url: '/images/Grupo 464.svg'},
    {name: 'profile', url: '/images/user.svg'},

]
</script>

<template>
    <main>
        <div class="background-svg"></div>
        <header>
            <nav class="side-nav">
                <img src="/images/Grupo 439.svg" alt="Sofex" />
                <ul class="side-nav__links" role="list">
                    <li v-for="icon in sideNavIcons">
                        <img :src="icon.url" :alt="icon.name" :aria-label="icon.name" :class="{ active: icon.active }" />
                    </li>
                </ul>
                <div class="side-nav__logout">
                    <img src="/images/power.svg" alt="" />
                </div>
            </nav>
            <nav id="navbar" class="top-nav">
                <div>
                    <img src="/images/menu.svg" alt="" />
                </div>
                <div class="top-nav__icons">
                    <img v-for="icon in topNavIcons" :src='icon.url' :alt='icon.name' :aria-label="icon.name" />
                </div>
            </nav>
        </header>

        <div class="content">
            <slot></slot>
        </div>
    </main>
</template>

<style scoped>
main {
    --side-nav-width: 90px;
    --top-nav-height: 120px;
}

.top-nav {
    position: fixed;
    height: var(--top-nav-height);
    left: var(--side-nav-width);
    width: calc(100% - var(--side-nav-width));
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 7000;
    border-bottom: 1px solid rgb(var(--gray-100));
    background-color: rgb(var(--white));
    padding-inline: 3.125rem;
}

.top-nav__icons {
    display: flex;
    gap: 3.25rem;
    cursor: pointer;
}

.side-nav {
    position: fixed;
    height: 100vh;
    width: var(--side-nav-width);
    z-index: 9999;
    padding-block-start: 2.1rem;
    padding-block-end: 3.375rem;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid rgb(var(--gray-100));
    background-color: rgb(var(--white));
}

.side-nav__links {
    --icon-padding: 15px;
    padding: 0;
    display: flex;
    flex-direction: column;
    margin-block: 4.31rem;
    gap: calc(3.625rem - (2 * var(--icon-padding)));
    align-items: center;
}

.side-nav__links li > img {
    padding: var(--icon-padding);
    cursor: pointer;
}

.side-nav__logout {
    position: absolute;
    bottom: 5rem;
}

.content {
    position: relative;
    top: var(--top-nav-height);
    left: calc(var(--side-nav-width) - 50px);
    margin-inline: 3.525rem;
}

.active {
    background-color: rgba(var(--blue-300), .15);
    border-radius: 14px;
}

@media only screen and (max-width: 500px) {
    .side-nav {
        display: none;
    }

    .top-nav {
        width: 100vw;
        left: 0;
    }
    .content {
        left: 0;
    }
}
</style>
