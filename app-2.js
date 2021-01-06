// Initialisation App

const App = {
  data() {
    return {
      title: 'Список',
      placeholderString: 'Введите заметку',
      inputValue: '',
      notes: []
    }
  },

  methods: {
    inputChangeHandler(event) {
      this.inputValue = event.target.value
    },
    addNoteHandler() {
      if(this.inputValue) {
        this.notes.push(this.inputValue)
        this.inputValue = ''
      }
    },
    deleteNoteHandler(index, event) {
      this.notes.splice(index, 1)
      
      // Event if it needed as $event in HTML
      console.log(event);
    },
    toUpperCase(item) {
      return item.toUpperCase()
    }
  },

  computed: {
    doubleCountComputed() {
      return this.notes.length * 2
    }
  },

  watch: {
    inputValue(value) {
      // Max 10 char in input string inputValue
      if (value.length > 10) {
        this.inputValue = this.inputValue.substring(0, this.inputValue.length - 1)
      }
    }
  }
}

// const app = Vue.createApp(App)
// app.mount('#app')
Vue.createApp(App).mount('#app')