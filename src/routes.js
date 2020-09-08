import Home from './components/AllPhotos'
import SnappySearchResult from './components/SnappySearchResult'
export const routes = [
    // mode: 'History',
    {
        path: '/',
        component: Home,
        // beforeRouteLeave(to, from, next) {
        //     console.log('beforeEnter: HOME')
        //     next()
        // }
    },
    {
        path: '/photos/page/:id',
        // path: '/album/page/:id',
        component: Home,
        // beforeRouteEnter (to, from, next) {
        //     next(vm => {
        //         // access to component instance via `vm`
        //         console.log('My', vm)
        //     })
        // }
    },
    {
        path: '/album/:id/page/:page',
        component: SnappySearchResult
    },
    {
        path: '/photos/:id',
        component: Home
    },
]