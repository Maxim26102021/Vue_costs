<template>
<form class="form">
  <input type="text" v-model="descr" placeholder="Описание"/>
  <input type="text" v-model.number="sum" placeholder="Сумма"/>
    <input type="date" v-model="date" placeholder="Дата"/>
    <input @click="sendData" type="button" value="Отправить результат"/>
</form>
</template>

<script>
export default {
    name: 'form',
    data () {
        return {
            descr: "",
            sum: "",
            date: ""
        }
    },
    methods: {
        sendData () {
            const data = {
                descr: this.descr,
                sum: this.sum,
                date: this.date
            };
            this.$emit('takeData', data)
        }
    }
}

</script>

<style>

</style>