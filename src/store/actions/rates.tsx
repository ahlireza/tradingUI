import { createAction } from "@reduxjs/toolkit"

import { RateInterface } from "src/definition/interfaces"

//------------------------------
//---Update Rates
//------------------------------
export const updateDays = createAction<RateInterface>("updateDays")

export const updateaudirrRate = createAction<RateInterface>("updateaudirrRate")
export const updateirraudRate = createAction<RateInterface>("updateirraudRate")
export const updateaudaedRate = createAction<RateInterface>("updateaudaedRate")
export const updateaedaudRate = createAction<RateInterface>("updateaedaudRate")
export const updateaudcadRate = createAction<RateInterface>("updateaudcadRate")
export const updatecadaudRate = createAction<RateInterface>("updatecadaudRate")
export const updateaudeurRate = createAction<RateInterface>("updateaudeurRate")
export const updateeuraudRate = createAction<RateInterface>("updateeuraudRate")
export const updateaudusdRate = createAction<RateInterface>("updateaudusdRate")
export const updateusdaudRate = createAction<RateInterface>("updateusdaudRate")

export const updateaedirrRate = createAction<RateInterface>("updateaedirrRate")
export const updateirraedRate = createAction<RateInterface>("updateirraedRate")
export const updatecadirrRate = createAction<RateInterface>("updatecadirrRate")
export const updateirrcadRate = createAction<RateInterface>("updateirrcadRate")
export const updateeurirrRate = createAction<RateInterface>("updateeurirrRate")
export const updateirreurRate = createAction<RateInterface>("updateirreurRate")
export const updatetrlirrRate = createAction<RateInterface>("updatetrlirrRate")
export const updateirrtrlRate = createAction<RateInterface>("updateirrtrlRate")
export const updateusdirrRate = createAction<RateInterface>("updateusdirrRate")
export const updateirrusdRate = createAction<RateInterface>("updateirrusdRate")

export const updateaudirrSell = createAction<RateInterface>("updateaudirrSell")
export const updateirraudSell = createAction<RateInterface>("updateirraudSell")
export const updateaudirrAED = createAction<RateInterface>("updateaudirrAED")
export const updateirraudAED = createAction<RateInterface>("updateirraudAED")
export const updateaudirrMarket = createAction<RateInterface>("updateaudirrMarket")
export const updateirraudMarket = createAction<RateInterface>("updateirraudMarket")
export const updateaudirrSuggestion = createAction<RateInterface>("updateaudirrSuggestion")
export const updateirraudSuggestion = createAction<RateInterface>("updateirraudSuggestion")
