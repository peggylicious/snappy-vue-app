import Home from './components/AllPhotos'
import SnappySearchResult from './components/SnappySearchResult'
export const routes = [
    // mode: 'History',
    {
        path: '/',
        component: Home
    },
    {
        path: '/:id',
        component: SnappySearchResult
    }
]