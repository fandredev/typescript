interface I_Game {
    title: string,
    description: string
    readonly genre: string,
    platform?: Array<string> | undefined,
    getSimilars?: (title: string) => void
}

const tlou: I_Game = {
    title: 'The last of us',
    description: 'Game',
    genre: 'Action',
    // platform: ['ps3', 'ps4'],
    getSimilars: (title: string) => {
        console.log(`similar games to ${title} | uncharted | jogos aqui`)
    }
}

console.log(tlou.title)
console.log(tlou.description)
console.log(tlou.genre)
// tlou.genre = 'Terror'
console.log(tlou.platform)
if (tlou.getSimilars) tlou.getSimilars(tlou.title)

interface DLC extends I_Game {
    originalGame: I_Game
    newContent: Array<string> | undefined
}

const leftbehind: DLC = {
    title: 'The last of us - behind',
    description: 'you play as ellie before the game',
    genre: 'Action',
    platform: ['ps3', 'ps4'],
    originalGame: tlou,
    newContent: ["3 hours history", "new characteres"]
}

class CreatedGame implements I_Game {
    title: string
    description: string
    genre: string

    constructor(t: string, d: string, g: string) {
        this.title = t
        this.description = d
        this.genre = g
    }
}






// obs

interface abc {
    a: number
}
interface abc {
    b: number
}

// result = interface abc { a: number, b: number }