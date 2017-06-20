const { ActionTypes } = window.App;


window.App.reducers.loading = (state = "hidden", action) => {
    switch (action.type) {
        case ActionTypes.TOGGLE_LOADING_PAGE:
            console.log("TOGGLE_LOADING_PAGE before", state);
            return state === "visible" ? "hidden" : "visible";
        default:
            return state;
    }
};