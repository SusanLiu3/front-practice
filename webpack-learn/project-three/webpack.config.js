const TerserPlugin =require('terser-webpack-plugin')
module.exports={
    entry:{
        'large-two-number-lss': './src/index.js', // 最后生成两个文件(压缩/非压缩)
        'large-two-number-lss.min': './src/index.js'
    },
    output:{
        filename:'[name].js', // 文件名称
        path:__dirname+'/dist',// 目录
        libraryExport:'default',
        library:'largeTwoNumberAdd', // 
        libraryTarget:'umd',
         globalObject: 'typeof self !== \'undefined\'?self:this'
    },
    mode:'none', // 默认不压缩
    optimization:{
        minimize:true,
        minimizer:[
            new TerserPlugin({
                test:/\.min\.js$/i // 只对.min 压缩
            })
        ]
    }
}