import routeTest from './components/test';
import Home from './components/photos-component/AllPhotos'
import ResultList from './components/ResultList'
// import Home from './components/SearchPix'
// import SearchResult from './components/SearchResult'

export const routes = [
    {path: '/test', component: routeTest},
    // {path: '/todos?q=:id', component: SearchResult},
    // {path: '/todos?q=:id', component: ResultList},
    {path: '/', component: Home},
    {path: '/:id', component: ResultList},
]