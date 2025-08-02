export default function batPassGen() {
    let pass:string = ''
    let characters:string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    let charactersLength = 8
    for(let i = 0; i < charactersLength; i++) {
    pass += characters.charAt(
        Math.floor(
            Math.random() * characters.length))
}
    return pass
}