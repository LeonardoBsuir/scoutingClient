var webpack = require('webpack');

module.exports = {
    watch: true,
    watchOptions: {
        aggregateTimeout: 50
    },
    devtool: 'source-map',
    entry: {
        app: './app/app.module.js',
        dependencies: ['angular', 'bootstrap/dist/js/bootstrap.min', 'angular-sanitize',
            'angular-ui-bootstrap/dist/ui-bootstrap-tpls.js', 'angular-resource', 'angular-ui-router',
            'angular-translate', 'bootstrap/dist/css/bootstrap.min.css', 'angular-translate-loader-static-files',
            'angular-ui-bootstrap/dist/ui-bootstrap-csp.css', 'angular-paging', 'angular-cookies',
            'angular-translate-storage-cookie', 'angular-translate-storage-local', 'checklist-model',
            'oi.select', 'oi.select/dist/select.min.css']
    },
    output: {
        filename: '[name].bundle.js'
    },
    resolve: {
        modulesDirectories: ['node_modules'],
        extensions: ['', '.js', '.css']
    },

    module: {
        loaders: [
            {test: /\.css$/, loader: 'style-loader!css-loader'},
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'url-loader?limit=10000&mimetype=application/font-woff'
            },
            {
                test: /\.(ttf|eot|svg|png)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'file-loader'
            }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        }),
        new webpack.optimize.UglifyJsPlugin({minimize: true}),
        new webpack.optimize.CommonsChunkPlugin('dependencies', 'dependencies.bundle.js')
    ]
};