"use strict";
function useState() {
    let state;
    function getState(params) {
        return params;
    }
    function setState(newState) {
        state = newState;
    }
    return { getState, setState };
}
// const newState = useState<boolean>()
const newState = useState();
newState.setState('foo');
//# sourceMappingURL=generics.js.map