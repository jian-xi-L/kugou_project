
// 引入nav
import Nav from "../components/Nav/Nav.vue"
// 引四个组件
import Newsong from '../views/Newsong/Newsong.vue'
import Plist from '../views/Plist/Plist.vue'
import Rank from '../views/Rank/Rank.vue'
import Singer from '../views/Singer/Singer.vue'


const NavRoutes = [
    {
        path: '/',
        name: 'NewSong',
        components: {
            default: Newsong,
            nav: Nav
        },
        meta: {
            title: "新歌"
        }
    }, {
        path: '/rank',
        name: 'Rank',
        components: {
            default: Rank,
            nav: Nav
        },
        meta: {
            title: "排行"
        }
    }, {
        path: '/plist',
        name: 'Plist',
        components: {
            default: Plist,
            nav: Nav
        },
        meta: {
            title: "歌单"
        }
    }, {
        path: '/singer',
        name: 'Singer',
        components: {
            default: Singer,
            nav: Nav
        },
        meta: {
            title: "歌手"
        }
    }

];

export default NavRoutes