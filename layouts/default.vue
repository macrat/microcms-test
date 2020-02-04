<style scoped>
header {
    max-width: 30em;
    margin: 0 auto 3rem;
    border-bottom: 1px solid lightgray;
}
header h1 {
    font-size: 1.2rem;
}
header a {
    text-decoration: none;
}
</style>

<style>
main {
    max-width: 60em;
    margin: auto;
}

h1, h2, h3, h4, h5, h6 {
    color: #333;
    text-align: center;
}
h1 {
    font-size: 1.8rem;
}
h2 {
    font-size: 1.2rem;
}
</style>

<template>
    <div>
        <header>
            <router-link to=/><h1>microCMS test</h1></router-link>
        </header>

        <main>
            <nuxt />
        </main>
    </div>
</template>
