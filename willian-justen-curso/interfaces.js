"use strict";
const tlou = {
    title: 'The last of us',
    description: 'Game',
    genre: 'Action',
    // platform: ['ps3', 'ps4'],
    getSimilars: (title) => {
        console.log(`similar games to ${title} | uncharted | jogos aqui`);
    }
};
console.log(tlou.title);
console.log(tlou.description);
console.log(tlou.genre);
// tlou.genre = 'Terror'
console.log(tlou.platform);
if (tlou.getSimilars)
    tlou.getSimilars(tlou.title);
const leftbehind = {
    title: 'The last of us - behind',
    description: 'you play as ellie before the game',
    genre: 'Action',
    platform: ['ps3', 'ps4'],
    originalGame: tlou,
    newContent: ["3 hours history", "new characteres"]
};
class CreatedGame {
    constructor(t, d, g) {
        this.title = t;
        this.description = d;
        this.genre = g;
    }
}
// result = interface abc { a: number, b: number }
//# sourceMappingURL=interfaces.js.map