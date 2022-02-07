<template>
    <div class="flex">
        <div class="flex__block">{{ nums }}</div>
        <div class="flex__block">{{ date }}</div>
        <div class="flex__block">{{ descr }}</div>
        <div class="flex__block">{{ sum }}</div>
    </div>
</template>

<script>
    export default {
        name: 'Costs',
        props: ['nums', 'date', 'descr', 'sum'],

    }

</script>

<style lang="scss">
    .flex {
        display: flex;
        flex-wrap: nowrap;
        width: 1000px;
        &__block {
            width: 200px;
            overflow: hidden;
            height: 50px;
            border: 1px solid grey;
        }
    }
</style>