import '../css/app.css'
import { createApp, h } from 'vue'
import { createInertiaApp } from '@inertiajs/inertia-vue3'
import DefaultLayout from './Layouts/Default.vue'

createInertiaApp({
  resolve: name => {
    const page = require(`./Pages/${name}`).default

    if (!page.layout) {
      page.layout = DefaultLayout
    }

    return page
  },
  setup({ el, App, props, plugin }) {
    createApp({ render: () => h(App, props) })
      .use(plugin)
      .mount(el)
  },
})