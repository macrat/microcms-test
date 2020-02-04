<style scoped>
.metadata {
    display: block;
    text-align: center;
}
.eyecatch {
    max-height: 22em;
    overflow: hidden;
    display: flex;
    align-items: center;
    margin-top: -2rem;
}
.eyecatch img {
    width: 100%;
    height: 100%;
}
</style>

<template>
    <div>
        <div class=eyecatch v-if=eyecatch><img :src=eyecatch.url /></div>
        <h1>{{ title }}</h1>
        <span class=metadata><category-label :value=category.title /> <date-label :value=createdAt /></span>
        <article v-html=body />
        <router-link to=/>← 戻る</router-link>
    </div>
</template>

<script>
import DateLabel from '~/components/DateLabel';
import CategoryLabel from '~/components/CategoryLabel';


export default {
    components: {DateLabel, CategoryLabel},
    head() {
        return {title: this.title};
    },
    data: () => ({
        createdAt: null,
        title: '',
        body: '',
        category: {title: ''},
        eyecatch: null,
    }),
    async asyncData({app, params, query}) {
        return await app.$api.getNewsArticle(params.id, query.draft);
    },
};
</script>
