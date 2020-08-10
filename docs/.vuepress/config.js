module.exports = {
    title: 'React-Antd-Admin',
    themeConfig: {
        // logo
        logo: '/assets/images/avatar.png',
        // 导航栏
        nav: [
            { text: '指南', link: '/guide/' },
            {
                text: '功能',
                link: '/',
                items: [
                    {
                        text: '组件',
                        items: [
                            {
                                text: '指南',
                                link: '/guide/'
                            }
                        ]
                    }
                ]
            },
            { text: 'GitHub', link: 'https://github.com/liuzhao2580/React-admin-antd', target: '_black' }
        ],
        // 侧边栏
        sidebar: [
            {
                title: '基础', // 必要的
                path: '/guide', // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                // sidebarDepth: 2, // 可选的, 默认值是 1
                children: [
                    {
                        title: '介绍', // 必要的
                        path: '/', // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                    },
                    // {
                    //     title: '布局', // 必要的
                    //     path: 'layout', // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                    // },
                ]
            },
            // {
            //     title: '进阶', // 必要的
            //     path: '/advanced', // 可选的, 标题的跳转链接，应为绝对路径且必须存在
            //     collapsable: false, // 可选的, 默认值是 true,
            //     sidebarDepth: 1, // 可选的, 默认值是 1
            //     children: [
            //         {
            //             title: '跨域问题', // 必要的
            //             path: '/', // 可选的, 标题的跳转链接，应为绝对路径且必须存在
            //             collapsable: false, // 可选的, 默认值是 true,
            //         },
            //         {
            //             title: '布局', // 必要的
            //             path: '/layout', // 可选的, 标题的跳转链接，应为绝对路径且必须存在
            //         },
            //     ]
            // },
        ]
    }
}
