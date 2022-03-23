<template>
<form class="form">
  <input class="form__field inp" type="text" v-model="category" placeholder="Category"/>
  <input class="form__field inp" type="text" v-model.number="value" placeholder="Value"/>
    <input class="form__field inp" type="text" v-model="date" placeholder="Date"/>
    <button class="form__field btn" @click.prevent="sendData">add</button>
</form>
</template>

<script>
export default {
    name: 'form',
    data () {
        return {
            descr: "",
            value: "",
            date: "",
        }
    },
    methods: {
        sendData () {
            if(this.date == "") {
                const newDate = new Date();
                const d = newDate.getDate();
                const m = newDate.getMonth() + 1;
                const y = newDate.getFullYear();
                this.date = `${d}.${m}.${y}`
            } 
            const data = {
                id: Date.now(),
                descr: this.category,
                sum: this.value,
                date: this.date
            };
            this.$store.commit('setData', data)
            this.date = "";
        }
    },
    computed: {
        getPl() {
            return this.$store.getters.getPaymentLength
        }
    }
}

</script>

<style lang="scss">
.form {
    flex-wrap: no-wrap;
    margin-bottom: 20px;
    max-width: 500px;
    &__field {
        @include block;
        margin-bottom: 20px;
    }
    .inp {
        padding: 5px;
    }
    &__field:not(:last-child) {
        margin-right: 20px;
    }
    .btn {
        background-color: rgb(52, 196, 107);
        border: none;
        cursor: pointer;
        transition: 1s;
    }
    .btn:hover {
    background-color: rgb(47, 177, 97);  
    }
}
</style>