<style scoped>
ul {
    margin: 0;
    padding: 0;
}
li {
    display: block;
    margin: .5em 0;
}
a {
    color: #111;
}
</style>

<template>
    <div>
        <h2>お知らせ</h2>
        <ul>
            <li v-for="x in news" key=x.id><router-link :to=x.id>
                <date-label :value=x.createdAt />
                <category-label :value=x.category.title />
                <span>{{ x.title }}</span>
            </router-link></li>
        </ul>
    </div>
</template>

<script>
import DateLabel from '~/components/DateLabel';
import CategoryLabel from '~/components/CategoryLabel';


export default {
    components: {DateLabel, CategoryLabel},
    head: () => ({
        title: 'microCMS test',
        titleTemplate: '',
    }),
    data: () => ({
        news: [],
    }),
    async asyncData({app}) {
        return {
            news: await app.$api.getNewsList(),
        };
    },
};
</script>
