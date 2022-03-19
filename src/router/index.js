import Vue from 'vue';
import VueRouter from '../vue-router';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'hash',
    routes: [
        {
            path: '/',
            component: {
                render: (h) => <h1> 首页 </h1>
            }
        },
        {
            path: '/about',
            component: {
                render: (h) => {
                    return (
                        <h1>
                            About Page
                            <hr />
                            <router-link to="/about/a"> a页面</router-link>
                            <router-link to="/about/b">b 页面</router-link>
                            <router-view></router-view>
                        </h1>
                    );
                }
            },
            children: [
                {
                    path: 'a',
                    component: {
                        render(h) {
                            return <div>a page </div>;
                        }
                    }
                },
                {
                    path: 'b',
                    component: {
                        render(h) {
                            return <div>b page ---- </div>;
                        }
                    }
                }
            ]
        }
    ]
});

export default router;
