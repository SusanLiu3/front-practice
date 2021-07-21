module.exports = {
    myPromise: () => {
        return new Promise((resolve, reject) => {
            resolve('hello jest async -- promise')
        })
    },
    myCallback: (cb) => {
        setTimeout(() => {
            cb('I am a cb')
        }, 2000);
    },
    myAwait: async () => {
        return new Promise((resolve, reject) => {
            resolve('I am a async/await')
        })
    }
}