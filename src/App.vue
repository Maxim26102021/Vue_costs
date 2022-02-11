<template>
  <div id="app">
        <formField @takeData="takeData"></formField>
    <costs
    v-for="(payment, ind) in paginatedUsers"
    :key="ind"
    :nums="payment.nums"
    :date="payment.date"
    :sum="payment.sum"
    :descr="payment.descr"
    ></costs>
    <div class="pagination">
      <a @click="showPage(page)" href="#" class="pagination__page"
    v-for="page in pages"
    :key="page"
    >{{ page }}</a>
    </div>
  </div>
</template>

<script>
import costs from './components/Costs';
import formField from './components/Form';

export default {
  components: {
    costs,
    formField,
  },
  data() {
    return {
      count: 5,
      pageNumber: 1
    }
  },
  methods: {
    takeData(e) {
      
      const num = this.$store.state.payments.length + 1;
      const newPayment = {nums: num, ...e};

      this.$store.commit('setData', newPayment)
      console.log(newPayment);
      this.payments.push(newPayment);
      console.log(this.payment)
    },
    showPage(page) {
      this.pageNumber = +page
    }
  },
  computed: {
    pages() {
      return Math.ceil(this.$store.state.payments.length / this.count)
    },
    paginatedUsers () {
      let from = (this.pageNumber - 1) * this.count;
      let to = from + this.count;
      return this.$store.state.payments.slice(from, to)
    }
  }
}


</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.pagination {
  display: flex;
  &__page {
    display: block;
    width: 20px;
    height: 20px;
    border: 1px solid grey;
    text-decoration: none;
  }

}
</style>
