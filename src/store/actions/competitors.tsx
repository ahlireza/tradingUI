import { createAction } from "@reduxjs/toolkit"

import { RateInterface } from "src/definition/interfaces"

//------------------------------
//---Competitors Rates
//------------------------------
export const updateaudirrMoneyMex = createAction<RateInterface>("competitorsRate/audirrMoneyMex")
export const updateirraudMoneyMex = createAction<RateInterface>("competitorsRate/irraudMoneyMex")

export const updateaudirrRosecap = createAction<RateInterface>("competitorsRate/audirrRosecap")
export const updateirraudRosecap = createAction<RateInterface>("competitorsRate/irraudRosecap")

export const updateaudirrSeyhoon = createAction<RateInterface>("competitorsRate/audirrSeyhoon")
export const updateirraudSeyhoon = createAction<RateInterface>("competitorsRate/irraudSeyhoon")

export const updateaudirrJavadi = createAction<RateInterface>("competitorsRate/audirrJavadi")
export const updateirraudJavadi = createAction<RateInterface>("competitorsRate/irraudJavadi")

export const updateaudirrExpress = createAction<RateInterface>("competitorsRate/audirrExpress")
export const updateirraudExpress = createAction<RateInterface>("competitorsRate/irraudExpress")

export const updateaudirrKangroos = createAction<RateInterface>("competitorsRate/audirrKangroos")
export const updateirraudKangroos = createAction<RateInterface>("competitorsRate/irraudKangroos")

export const updateaudirrRoomi = createAction<RateInterface>("competitorsRate/audirrRoomi")
export const updateirraudRoomi = createAction<RateInterface>("competitorsRate/irraudRoomi")

export const updateaudirrAfshar = createAction<RateInterface>("competitorsRate/audirrAfshar")
export const updateirraudAfshar = createAction<RateInterface>("competitorsRate/irraudAfshar")

