import { createAction } from "@reduxjs/toolkit"

import { RateInterface } from "src/definition/interfaces"

//------------------------------
//---Competitors Rates
//------------------------------
export const updateaudirrMoneyMex = createAction<RateInterface>("updateaudirrMoneyMex")
export const updateirraudMoneyMex = createAction<RateInterface>("updateirraudMoneyMex")

export const updateaudirrRosecap = createAction<RateInterface>("updateaudirrRosecap")
export const updateirraudRosecap = createAction<RateInterface>("updateirraudRosecap")

export const updateaudirrSeyhoon = createAction<RateInterface>("updateaudirrSeyhoon")
export const updateirraudSeyhoon = createAction<RateInterface>("updateirraudSeyhoon")

export const updateaudirrJavadi = createAction<RateInterface>("updateaudirrJavadi")
export const updateirraudJavadi = createAction<RateInterface>("updateirraudJavadi")

export const updateaudirrExpress = createAction<RateInterface>("updateaudirrExpress")
export const updateirraudExpress = createAction<RateInterface>("updateirraudExpress")

export const updateaudirrKangroos = createAction<RateInterface>("updateaudirrKangroos")
export const updateirraudKangroos = createAction<RateInterface>("updateirraudKangroos")

export const updateaudirrRoomi = createAction<RateInterface>("updateaudirrRoomi")
export const updateirraudRoomi = createAction<RateInterface>("updateirraudRoomi")

export const updateaudirrAfshar = createAction<RateInterface>("updateaudirrAfshar")
export const updateirraudAfshar = createAction<RateInterface>("updateirraudAfshar")

