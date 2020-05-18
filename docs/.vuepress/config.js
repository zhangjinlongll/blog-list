const pluginConf = require('./config/plugin')
const sidebarConf = require('./config/sidebar')
const navConf = require('./config/nav')
const headConf = require('./config/head')

module.exports = {
    title: '微前端',
    description: '微前端',
    dest: './dist',
    port: '8090',
    head: headConf,
    markdown: {
        lineNumbers: true
    },
    themeConfig: {
        nav: navConf,
        sidebar: sidebarConf,
        sidebarDepth: 2,
        lastUpdated: 'Last Updated',
        searchMaxSuggestoins: 10,
        serviceWorker: {
            updatePopup: {
                message: "New content is available.",
                buttonText: 'Refresh'
            }
        },
        editLinks: true,
        editLinkText: '在 GitHub 上编辑此页 ！'
    },
    plugins: pluginConf
}
