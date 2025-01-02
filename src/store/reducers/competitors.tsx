import { createReducer } from "@reduxjs/toolkit"

import * as actions from "../actions/competitors"

//------------------------------
//---Initial State
//------------------------------
const initialState = {
    competitorsRate:{
        audirrMoneyMex: 0,
        irraudMoneyMex: 0,
        audirrRosecap: 0,
        irraudRosecap: 0,
        audirrSeyhoon: 0,
        irraudSeyhoon: 0,
        audirrJavadi: 0,
        irraudJavadi: 0,
        audirrExpress: 0,
        irraudExpress: 0,
        audirrKangroos: 0,
        irraudKangroos: 0,
        audirrRoomi: 0,
        irraudRoomi: 0,
        audirrAfshar: 0,
        irraudAfshar: 0,

        audirrMax: 0,
        irraudMin: 0
    }
}

//------------------------------
//---Create Reducer
//------------------------------
export default createReducer(initialState, (builder) => {
    builder
    .addMatcher(
        (action) => action.type.startsWith("competitorsRate/"),
        (state, action) => {
            const audRateKey = action.type.split("/")[1]
            if (audRateKey in state.competitorsRate) {
               state.competitorsRate[audRateKey] = action.payload 
            }
        }
    )
})
