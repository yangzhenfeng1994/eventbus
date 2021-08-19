## install
  ```bash
  yarn add v3eventbus
  // or
  npm install v3eventbus --save
  ```

## use
  ### main.js
  ```bash
  import { createApp } from 'vue'
  import App from './App.vue'
  // import
  import events from 'v3eventbus'

  const app = createApp(App)
  // use
  app.use(events)
  app.mount('#app')
  ```

  ### components
  #### Options API
  ```bash
  mounted () {
    // receive every emit
    this.$events.on('test', (a, b) => {
      console.log(a + b)
    })

    // receive once and off
    this.$events.once('test', (a, b) => {
      console.log(a + b)
    })

    this.$events.emit('test', 1, 2)

    // delete events
    this.$events.off('test')

  }
  ```
  #### Composition API
  ```bash
  import {getCurrentInstance} from 'vue'
  const app = getCurrentInstance()
  const event = app.proxy.$events
  event.on('test', (a, b) => {
    console.log(a, b, a+b, "on")
  })
  event.once('test', (a, b) => {
    console.log(a, b, a+b, "one")
  })
  event.emit('test'1, 2)
  event.off('test')
  ```
