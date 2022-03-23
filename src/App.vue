<template>
  <div id="app">
    <formField></formField>
    <costs></costs>
    <div class="pagination">
      <a @click="showPage(page)" href="#" class="pagination__page"
    v-for="page in pages"
    :key="page"
    >{{ page }}</a>
    </div>
  </div>
</template>

<script>

import { mapGetters } from 'vuex';
import { mapActions } from 'vuex';
import costs from './components/Costs';
import formField from './components/Form';

export default {
  components: {
    costs,
    formField,
  },
  methods: {
    ...mapActions([
      'fetchData'
    ]),
    showPage(page) {
      this.$store.commit('changePageNumber', page);

    },
    foo() {
      fetch('https://raw.githubusercontent.com/Maxim26102021/data/main/pages')
      .then(data => data.json())
      .then(data => console.log(data))
    }
  },
  computed: {
    ...mapGetters([
      'getPageNumber',
      'getPaymentLength',
      'getCount'
    ]),
    pages() {
      return Math.ceil(this.getPaymentLength / this.getCount)
    },
  },
  created() {
   this.fetchData(this.getPageNumber)
   this.foo()
  }
}

</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Neonderthaw&family=Roboto:wght@300&display=swap');

#app {
  padding: 10px;
}
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: Roboto, sans-serif;
}
.pagination {
  display: flex;
  &__page {
    margin: 1px;
    text-align: center;
    display: block;
    width: 20px;
    height: 20px;
    border: 1px solid grey;
    text-decoration: none;
  }

}
</style>
