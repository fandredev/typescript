type numOrStr = number | string

function useState<S extends numOrStr = string>() {
    let state: S

    function getState(params: any) {
        return params
    }
    function setState(newState: S) {
        state = newState
    }

    return { getState, setState }
}

// const newState = useState<boolean>()
const newState = useState()
newState.setState('foo')
