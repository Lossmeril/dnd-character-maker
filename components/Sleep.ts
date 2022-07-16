const sleep = (ms: number) => new Promise(resolve => {
    setTimeout(() => resolve(undefined), ms)
})

export default sleep
