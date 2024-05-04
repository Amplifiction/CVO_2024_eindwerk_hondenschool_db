// import './bootstrap';
import { createInertiaApp } from '@inertiajs/react'
import { createRoot } from 'react-dom/client'
import { DefaultLayout } from './Components/DefaultLayout'

createInertiaApp({
    resolve: name => {
        const pages = import.meta.glob('./Pages/**/*.jsx', { eager: true })
        let page = pages[`./Pages/${name}.jsx`]
        page.default.layout = page.default.layout || (page => <DefaultLayout children={page} />)
        return page
    },
    setup({ el, App, props }) {
        createRoot(el).render(<App {...props} />)
    },
})
