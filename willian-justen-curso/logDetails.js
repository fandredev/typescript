"use strict";
function logDetails(uid, item) {
    console.log(`${uid} ${item}`);
}
function logInfo(uid, user) {
    console.log(`${uid} ${user}`);
}
function handlePlatform(plat) {
    return plat;
}
handlePlatform('ios');
logDetails(123, 'sapato');
logDetails('123', 'sapato');
logInfo(123, 'sapato');
logInfo('123', 'sapato');
//# sourceMappingURL=logDetails.js.map