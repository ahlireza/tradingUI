import { createReducer } from "@reduxjs/toolkit"

import * as actions from "../actions/rates"

//------------------------------
//---Initial State
//------------------------------
const initialState = {
    days: 2,

    audirrRate: 450000,
    irraudRate: 460000,
    audaedRate: 2.3929,
    aedaudRate: 2.4154,
    audeurRate: 0.5525,
    euraudRate: 0.5586,
    audusdRate: 0.6623,
    usdaudRate: 0.6711,

    aedirrRate: 200000,
    irraedRate: 203000,
    eurirrRate: 890000,
    irreurRate: 905000,
    trlirrRate: 160000,
    irrtrlRate: 170000,
    usdirrRate: 710000,
    irrusdRate: 720000,

    audirrSell: 0,
    irraudSell: 0,
    audirrAED: 0,
    irraudAED: 0,
    audirrMarket: 0,
    irraudMarket: 0,
    audirrSuggestion: 0,
    irraudSuggestion: 0
}

//------------------------------
//---Create Reducer
//------------------------------
export default createReducer(initialState, (builder) => {
    builder
        .addCase(actions.updateDays, (state, action) => { state.days = action.payload })

        .addCase(actions.updateaudirrRate, (state, action) => { state.audirrRate = action.payload })
        .addCase(actions.updateirraudRate, (state, action) => { state.irraudRate = action.payload })
        .addCase(actions.updateaudaedRate, (state, action) => { state.audaedRate = action.payload })
        .addCase(actions.updateaedaudRate, (state, action) => { state.aedaudRate = action.payload })
        .addCase(actions.updateaudcadRate, (state, action) => { state.audcadRate = action.payload })
        .addCase(actions.updatecadaudRate, (state, action) => { state.cadaudRate = action.payload })
        .addCase(actions.updateaudeurRate, (state, action) => { state.audeurRate = action.payload })
        .addCase(actions.updateeuraudRate, (state, action) => { state.euraudRate = action.payload })
        .addCase(actions.updateaudusdRate, (state, action) => { state.audusdRate = action.payload })
        .addCase(actions.updateusdaudRate, (state, action) => { state.usdaudRate = action.payload })
    
        .addCase(actions.updateaedirrRate, (state, action) => { state.aedirrRate = action.payload })
        .addCase(actions.updateirraedRate, (state, action) => { state.irraedRate = action.payload })
        .addCase(actions.updateeurirrRate, (state, action) => { state.eurirrRate = action.payload })
        .addCase(actions.updatecadirrRate, (state, action) => { state.cadirrRate = action.payload })
        .addCase(actions.updateirrcadRate, (state, action) => { state.irrcadRate = action.payload })
        .addCase(actions.updateirreurRate, (state, action) => { state.irreurRate = action.payload })
        .addCase(actions.updatetrlirrRate, (state, action) => { state.trlirrRate = action.payload })
        .addCase(actions.updateirrtrlRate, (state, action) => { state.irrtrlRate = action.payload })
        .addCase(actions.updateusdirrRate, (state, action) => { state.usdirrRate = action.payload })
        .addCase(actions.updateirrusdRate, (state, action) => { state.irrusdRate = action.payload })

        .addCase(actions.updateaudirrSell, (state, action) => { state.audirrSell = action.payload })
        .addCase(actions.updateirraudSell, (state, action) => { state.irraudSell = action.payload })
        .addCase(actions.updateaudirrAED, (state, action) => { state.audaedAed = action.payload })
        .addCase(actions.updateirraudAED, (state, action) => { state.irraedAed = action.payload })
        .addCase(actions.updateaudirrMarket, (state, action) => { state.audirrMarket = action.payload })
        .addCase(actions.updateirraudMarket, (state, action) => { state.irraudMarket = action.payload })
        .addCase(actions.updateaudirrSuggestion, (state, action) => { state.audirrSuggestion = action.payload })
        .addCase(actions.updateirraudSuggestion, (state, action) => { state.irraudSuggestion = action.payload })
})
