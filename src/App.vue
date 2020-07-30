<template>
    <div id="app">
        <nav id="nav">
            <router-link to="/">Main</router-link>,
            <router-link to="/todo">Todo app</router-link>
        </nav>
        <router-view />
    </div>
</template>

<style>
/* For reset purpose */
p, h1
{
    margin: 0;
}
</style>

<style scoped>
#nav
{
    border-bottom: 1px red solid;
    padding: 0.5rem;
}
</style>