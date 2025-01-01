import { createReducer } from "@reduxjs/toolkit"

import * as actions from "../actions/rates"

//------------------------------
//---Initial State
//------------------------------
const initialState = {
    days: 2,

    audRates:{
        audirrRate: 0,
        irraudRate: 0,
        audaedRate: 0,
        aedaudRate: 0,
        audcadRate: 0,
        cadaudRate: 0,
        audeurRate: 0,
        euraudRate: 0,
        audusdRate: 0,
        usdaudRate: 0
    },
    
    irrRates:{
        aedirrRate: 0,
        irraedRate: 0,
        cadirrRate: 0,
        irrcadRate: 0,
        eurirrRate: 0,
        irreurRate: 0,
        trlirrRate: 0,
        irrtrlRate: 0,
        usdirrRate: 0,
        irrusdRate: 0
    },

    suggestionRates:{
        audirrSell: 0,
        irraudBuy: 0,
        audirrAED: 0,
        irraudAED: 0,
        audirrMarket: 0,
        irraudMarket: 0,
        audirrSuggestion: 0,
        irraudSuggestion: 0            
    }
}

//------------------------------
//---Create Reducer
//------------------------------
export default createReducer(initialState, (builder) => {
    builder
        .addCase(actions.updateDays, (state, action) => { state.days = action.payload })
        .addMatcher(
            (action) => action.type.startsWith("audRates/"),
            (state, action) => {
                const audRateKey = action.type.split("/")[1]
                if (audRateKey in state.audRates) {
                   state.audRates[audRateKey] = action.payload 
                }
            }
        )
        .addMatcher(
            (action) => action.type.startsWith("irrRates/"),
            (state, action) => {
                const irrRateKey = action.type.split("/")[1]
                if (irrRateKey in state.irrRates) {
                   state.irrRates[irrRateKey] = action.payload 
                }
            }
        )
        .addMatcher(
            (action) => action.type.startsWith("suggestionRates/"),
            (state, action) => {
                const suggestionRateKey = action.type.split("/")[1]
                if (suggestionRateKey in state.suggestionRates) {
                   state.suggestionRates[suggestionRateKey] = action.payload 
                }
            }
        )
})
