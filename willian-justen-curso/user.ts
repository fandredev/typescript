// account info
// char info
// player info

type AccountInfo = {
    id: number,
    name: string,
    email?: string
}

const account: AccountInfo = {
    id: 2,
    name: 'Felipe',
}

type charInfo = {
    nickname: string,
    level: number
}

const char: charInfo = {
    nickname: 'nome',
    level: 50
}
// intersection
type PlayerInfo = AccountInfo & charInfo

const plater: PlayerInfo = {
    id: 123,
    name: 'opa',
    nickname: 'akas',
    level: 100
}