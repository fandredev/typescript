// type alias
type Alias = number | string | undefined

function logDetails(uid: Alias, item: string): void {
    console.log(`${uid} ${item}`)
}

function logInfo(uid: Alias, user: string): void {
    console.log(`${uid} ${user}`)
}

type Platform = 'Windows' | 'Linux' | 'Mac OS' | 'ios'

function handlePlatform(plat: Platform): string {
    return plat
}
handlePlatform('ios')

logDetails(123, 'sapato')
logDetails('123', 'sapato')

logInfo(123, 'sapato')
logInfo('123', 'sapato')