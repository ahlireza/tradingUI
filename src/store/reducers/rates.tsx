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
    irrusdRate: 720000

        // {paid: "audirrMoneyMex", price: 0},
        // {paid: "irraudMoneyMex", price: 0},
        // {paid: "audirrRosecap", price: 0},
        // {paid: "irraudRosecap", price: 0},
        // {paid: "audirrSeyhoon", price: 0},
        // {paid: "irraudSeyhoon", price: 0},
        // {paid: "audirrJavadi", price: 0},
        // {paid: "irraudJavadi", price: 0},
        // {paid: "audirrExpress", price: 0},
        // {paid: "irraudExpress", price: 0},
        // {paid: "audirrKangroos", price: 0},
        // {paid: "irraudKangroos", price: 0},
        // {paid: "audirrRoomi", price: 0},
        // {paid: "irraudRoomi", price: 0},
        // {paid: "audirrAfshar", price: 0},
        // {paid: "irraudAfshar", price: 0}
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
        .addCase(actions.updateaudeurRate, (state, action) => { state.audeurRate = action.payload })
        .addCase(actions.updateeuraudRate, (state, action) => { state.euraudRate = action.payload })
        .addCase(actions.updateaudusdRate, (state, action) => { state.audusdRate = action.payload })
        .addCase(actions.updateusdaudRate, (state, action) => { state.usdaudRate = action.payload })
    
        .addCase(actions.updateaedirrRate, (state, action) => { state.aedirrRate = action.payload })
        .addCase(actions.updateirraedRate, (state, action) => { state.irraedRate = action.payload })
        .addCase(actions.updateeurirrRate, (state, action) => { state.eurirrRate = action.payload })
        .addCase(actions.updateirreurRate, (state, action) => { state.irreurRate = action.payload })
        .addCase(actions.updatetrlirrRate, (state, action) => { state.trlirrRate = action.payload })
        .addCase(actions.updateirrtrlRate, (state, action) => { state.irrtrlRate = action.payload })
        .addCase(actions.updateusdirrRate, (state, action) => { state.usdirrRate = action.payload })
        .addCase(actions.updateirrusdRate, (state, action) => { state.irrusdRate = action.payload })
})
