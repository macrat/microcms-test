<template>
    <date>{{ date.getFullYear() }}年{{ date.getMonth() + 1 }}月{{ date.getDate() }}日 {{ date.getHours() }}時{{ `${date.getMinutes()}`.padStart(2, '0') }}分</date>
</template>

<script>
export default {
    props: ['value'],
    computed: {
        date() {
            return new Date(this.value);
        },
    },
};
</script>
