module.exports = {
    devServer: {
        open: true,
        port: 9000
    },
    publicPath: process.env.NODE_ENV === 'production' ? '/chamber2/' : '/'
}