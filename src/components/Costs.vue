<template>
    <div class="flex">
            <div class="flex__name" v-if="this.$store.state.payments.length > 0">
                <div class="flex__block idi">id</div>
                <div class="flex__block date">Date</div>
                <div class="flex__block cat">Category</div>
                <div class="flex__block val">Value</div>
            </div>
            <div class="flex__container"
            v-for="(payment, idx) in this.paginatedUsers"
            :key="idx">
                <div class="flex__block idi">id  {{ payment.id }}</div>
                <div class="flex__block date">{{ payment.date }}</div>
                <div class="flex__block cat">{{ payment.category }}</div>
                <div class="flex__block val">{{ payment.value }}</div>
            </div>
    </div>
</template>

<script>

    import { mapGetters } from 'vuex';
    export default {
        name: 'Costs',
        computed: {
            getP() {
                return this.getPayment
            },
            ...mapGetters([
                'getCount',
                'getPageNumber',
                'getPayment'
            ]),
            paginatedUsers() {
                let from = (this.getPageNumber - 1) * this.getCount;
                let to = from + this.getCount;
                return this.$store.state.payments.slice(from, to)
            }

        }

    }

</script>

<style lang="scss">
    .flex {
        width: 1000px;
        &__container {
             @include container;
        }
        &__name {
            @include container;
        }
        &__block {
            @include block;  
            overflow: hidden; 
            display: flex;
            justify-content: center;
            align-items: center;
            }
        &__block:first-child::after {
            content: "Ghoo";
            position: relative;
            top: 50px;
            width: 20px;
            height: 20px;
        }
        &__block:not(:last-child) {
            margin-right: 20px;
        }
        
    }
</style>