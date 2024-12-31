import { createReducer } from "@reduxjs/toolkit"

import * as actions from "../actions/competitors"

//------------------------------
//---Initial State
//------------------------------
const initialState = {
    audirrMoneyMex: 450000,
    irraudMoneyMex: 460000,
    audirrRosecap: 450000,
    irraudRosecap: 460000,
    audirrSeyhoon: 450000,
    irraudSeyhoon: 460000,
    audirrJavadi: 450000,
    irraudJavadi: 460000,
    audirrExpress: 450000,
    irraudExpress: 460000,
    audirrKangroos: 450000,
    irraudKangroos: 460000,
    audirrRoomi: 450000,
    irraudRoomi: 460000,
    audirrAfshar: 450000,
    irraudAfshar: 460000
}

//------------------------------
//---Create Reducer
//------------------------------
export default createReducer(initialState, (builder) => {
    builder
        .addCase(actions.updateaudirrMoneyMex, (state, action) => { state.audirrMoneyMex = action.payload })
        .addCase(actions.updateirraudMoneyMex, (state, action) => { state.irraudMoneyMex = action.payload })

        .addCase(actions.updateaudirrRosecap, (state, action) => { state.audirrRosecap = action.payload })
        .addCase(actions.updateirraudRosecap, (state, action) => { state.irraudRosecap = action.payload })

        .addCase(actions.updateaudirrSeyhoon, (state, action) => { state.audirrSeyhoon = action.payload })
        .addCase(actions.updateirraudSeyhoon, (state, action) => { state.irraudSeyhoon = action.payload })

        .addCase(actions.updateaudirrJavadi, (state, action) => { state.audirrJavadi = action.payload })
        .addCase(actions.updateirraudJavadi, (state, action) => { state.irraudJavadi = action.payload })

        .addCase(actions.updateaudirrExpress, (state, action) => { state.audirrExpress = action.payload })
        .addCase(actions.updateirraudExpress, (state, action) => { state.irraudv = action.payload })

        .addCase(actions.updateaudirrKangroos, (state, action) => { state.audirrKangroos = action.payload })
        .addCase(actions.updateirraudKangroos, (state, action) => { state.irraudKangroos = action.payload })

        .addCase(actions.updateaudirrRoomi, (state, action) => { state.audirrRoomi = action.payload })
        .addCase(actions.updateirraudRoomi, (state, action) => { state.irraudRoomi = action.payload })

        .addCase(actions.updateaudirrAfshar, (state, action) => { state.audirrAfshar = action.payload })
        .addCase(actions.updateirraudAfshar, (state, action) => { state.irraudAfshar = action.payload })
})
