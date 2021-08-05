if (process.env.NODE_ENV==='production'){
    module.exports = require('./dist/large-two-number-lss.min')
}else{
    module.exports = require('./dist/large-two-number-lss')
}