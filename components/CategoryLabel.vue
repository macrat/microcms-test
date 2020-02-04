<style scoped>
span {
    background-color: #ddd;
    display: inline-block;
    margin: 0 .5em;
    padding: 0 .5em;
    border-radius: 10em;
}
</style>

<template>
    <span>{{ value }}</span>
</template>

<script>
export default {
    props: ['value'],
};
</script>
