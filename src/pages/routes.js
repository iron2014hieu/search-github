import { lazy } from 'react'

const HomePage = lazy(() => import('./home'))
const DetailPage = lazy(() => import('./detail'))

const routes = [
    {
        path: "/",
        exact: true,
        public: true,
        component: HomePage,
    },
    {
        path: "/detail",
        exact: false,
        public: true,
        component: DetailPage,

    }
]
export default routes