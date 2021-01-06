Vue.createApp({
  data: () => ({
    title: 'Заголовок',
    myHtml: '<h1>Vue 3 App</h1>',
    person: {
      firstName: 'Vladilen',
      lastName: 'Minin',
      age: 27
    },
    items: [1, 2, 3, 4, 5, 6]
  }),

  methods: {
    // Alternative @click.stop
    stopPropagation(event) {
      event.stopPropagation()
    },
    addItemHandler() {
      // console.log(this.$refs.myInput.value);
      this.items.unshift(this.$refs.myInput.value)
      this.$refs.myInput.value = ''
    }
  },

  computed: {
    evenItems() {
      return this.items.filter((item) => (item % 2) === 0 )
    }
  }
}).mount("#app")
