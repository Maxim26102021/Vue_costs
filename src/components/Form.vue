<template>
<form>
    <p>Описание платежа<input type="text" v-model="descr"/></p>
    <p>Сумма<input type="text" v-model.number="sum"/></p>
    <p>Дата<input type="date" v-model="date"/></p>
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