import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState }      from "react"
import { Helmet }   from "react-helmet"

import { InputNumber }    from "antd"

import { FormatNumber } from "src/components/common/format"
import { CustomBox }    from "src/components/core/CustomBox"

import { RateHeader } from "./header"

import { AppDispatch, RootState }   from "src/store"
import {
    updateaudirrRate,
    updateirraudRate,

    updateaudaedRate,
    updateaedaudRate,
    updateaudeurRate,
    updateeuraudRate,
    updateaudusdRate,
    updateusdaudRate,

    updateaedirrRate,
    updateirraedRate,
    updateeurirrRate,
    updateirreurRate,
    updatetrlirrRate,
    updateirrtrlRate,
    updateusdirrRate,
    updateirrusdRate
}   from "src/store/actions/rates"

import {
    RowContainer,
    BoxContainer,
    BoxHeader,
    YellowLine,
    BoxContent,
    Header,
    Title,
    Content
} from "../style"
import { Box } from "iconsax-react"

//------------------------------
//---Rate
//------------------------------
export const Rate = () => {
    const dispatch = useDispatch<AppDispatch>()
    //---State
    const rate = useSelector((state: RootState) => state.rates)

    //---Rate
    const [audirrRate, setAudirrRate] = useState(rate.audirrRate)
    const [irraudRate, setIrraudRate] = useState(rate.irraudRate)

    const [audaedRate, setAudaedRate] = useState(rate.audaedRate)
    const [aedaudRate, setAedaudRate] = useState(rate.aedaudRate)
    const [audeurRate, setAudeurRate] = useState(rate.audeurRate)
    const [euraudRate, setEuraudRate] = useState(rate.euraudRate)
    const [audusdRate, setAudusdRate] = useState(rate.audusdRate)
    const [usdaudRate, setUsdaudRate] = useState(rate.usdaudRate)

    const [aedirrRate, setAedirrRate] = useState(rate.aedirrRate)
    const [irraedRate, setIrraedRate] = useState(rate.irraedRate)
    const [eurirrRate, setEurirrRate] = useState(rate.eurirrRate)
    const [irreurRate, setIrreurRate] = useState(rate.irreurRate)
    const [trlirrRate, setTrlirrRate] = useState(rate.trlirrRate)
    const [irrtrlRate, setIrrtrlRate] = useState(rate.irrtrlRate)
    const [usdirrRate, setUsdirrRate] = useState(rate.usdirrRate)
    const [irrusdRate, setIrrusdRate] = useState(rate.irrusdRate)

    //---Suggestion
    const [audirrSell, setAudirrSell] = useState(rate.audirrSell)
    const [irraudSell, setIrraudSell] = useState(rate.irraudSell)

    const [audirrAED, setAudirrAED] = useState(rate.audirrAED)
    const [irraudAED, setIrraudAED] = useState(rate.irraudAED)

    const [audirrMarket, setAudirrMarket] = useState(rate.audirrMarket)
    const [irraudMarket, setIrraudMarket] = useState(rate.irraudMarket)

    const [audirrSuggestion, setAudirrSuggestion] = useState(rate.audirrSuggestion)
    const [irraudSuggestion, setIrraudSuggestion] = useState(rate.irraudSuggestion)

    //------------------------------
    //---Rates Handler
    //------------------------------
    const audirrHandler = (e) => {if (e.key === "Enter") {dispatch(updateaudirrRate(audirrRate))}}
    const irraudHandler = (e) => {if (e.key === "Enter") {dispatch(updateirraudRate(irraudRate))}}

    const audaedHandler = (e) => {if (e.key === "Enter") {dispatch(updateaudaedRate(audaedRate))}}
    const aedaudHandler = (e) => {if (e.key === "Enter") {dispatch(updateaedaudRate(aedaudRate))}}
    const audeurHandler = (e) => {if (e.key === "Enter") {dispatch(updateaudeurRate(audeurRate))}}
    const euraudHandler = (e) => {if (e.key === "Enter") {dispatch(updateeuraudRate(euraudRate))}}
    const audusdHandler = (e) => {if (e.key === "Enter") {dispatch(updateaudusdRate(audusdRate))}}
    const usdaudHandler = (e) => {if (e.key === "Enter") {dispatch(updateusdaudRate(usdaudRate))}}

    const aedirrHandler = (e) => {if (e.key === "Enter") {dispatch(updateaedirrRate(aedirrRate))}}
    const irraedHandler = (e) => {if (e.key === "Enter") {dispatch(updateirraedRate(irraedRate))}}
    const eurirrHandler = (e) => {if (e.key === "Enter") {dispatch(updateeurirrRate(eurirrRate))}}
    const irreurHandler = (e) => {if (e.key === "Enter") {dispatch(updateirreurRate(irreurRate))}}
    const trlirrHandler = (e) => {if (e.key === "Enter") {dispatch(updatetrlirrRate(trlirrRate))}}
    const irrtrlHandler = (e) => {if (e.key === "Enter") {dispatch(updateirrtrlRate(irrtrlRate))}}
    const usdirrHandler = (e) => {if (e.key === "Enter") {dispatch(updateusdirrRate(usdirrRate))}}
    const irrusdHandler = (e) => {if (e.key === "Enter") {dispatch(updateirrusdRate(irrusdRate))}}
    
    //------------------------------
    return (
        <>
            <Helmet>
                <title>NeoEx-Rate</title>
            </Helmet>
            <div>
                <RateHeader />
        {/* ---Body */}
                <RowContainer>
                    <CustomBox>
        {/* ---AUD IRR Rate */}
                        <BoxContainer style={{width: "60vw", marginLeft: "1vw"}}>
                            <CustomBox>
                                <BoxHeader style={{width: "40vw", marginLeft: "1vw", marginTop: "1vw"}}>
                                    <YellowLine>
                                        <Header>AUD - IRR Rate</Header>
                                    </YellowLine>
                                </BoxHeader>
                                <BoxContent style={{width: "40vw", marginLeft: "1vw", marginTop: "1vw"}}>
                                    <BoxContent style={{width: "15vw"}}>
                                        <Title style={{width: "5vw"}}>
                                            AUD / IRR
                                        </Title>
                                        <InputNumber
                                            variant="filled"
                                            style={{width: "7vw"}}
                                            min={0}
                                            value={FormatNumber(audirrRate,0)}
                                            onChange={(value)=>{
                                                setAudirrRate(value)
                                            }}
                                            onKeyDown={audirrHandler}
                                        />
                                    </BoxContent>
                                    <BoxContent style={{width: "15vw"}}>
                                        <Title style={{width: "5vw"}}>
                                            IRR / AUD
                                        </Title>
                                        <InputNumber
                                            variant="filled"
                                            style={{width: "7vw"}}
                                            min={0}
                                            value={FormatNumber(irraudRate,0)}
                                            onChange={(value)=>{
                                                setIrraudRate(value)
                                            }}
                                            onKeyDown={irraudHandler}
                                        />
                                    </BoxContent>
                                </BoxContent>
                                <BoxContent style={{width: "35vw", marginLeft: "1vw", marginBottom: "1vw"}}>
                                    <BoxContent style={{width: "10vw"}}>
                                        <Title style={{width: "5vw"}}>
                                            Suggestion
                                        </Title>
                                        <Content>
                                            {FormatNumber(audirrSuggestion,0)}
                                        </Content>
                                    </BoxContent>
                                    <BoxContent style={{width: "10vw"}}>
                                        <Title style={{width: "5vw"}}>
                                            Suggestion
                                        </Title>
                                        <Content>
                                            {FormatNumber(irraudSuggestion,0)}
                                        </Content>
                                    </BoxContent>
                                </BoxContent>
                            </CustomBox>
                        </BoxContainer>
                    </CustomBox>
                </RowContainer>
            </div>
        </>
    )
}
