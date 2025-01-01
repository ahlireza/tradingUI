import { useDispatch, useSelector } from "react-redux"
import { useState } from "react"
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
    updateaudcadRate,
    updatecadaudRate,
    updateaudeurRate,
    updateeuraudRate,
    updateaudusdRate,
    updateusdaudRate,

    updateaedirrRate,
    updateirraedRate,
    updatecadirrRate,
    updateirrcadRate,
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

//------------------------------
//---Rate
//------------------------------
export const Rate = () => {
    const dispatch = useDispatch<AppDispatch>()
    //---State
    const rate = useSelector((state: RootState) => state.rates)

    //---Rate
    const [audirrRate, setAudirrRate] = useState(rate.audRates.audirrRate)
    const [irraudRate, setIrraudRate] = useState(rate.audRates.irraudRate)

    const [audaedRate, setAudaedRate] = useState(rate.audRates.audaedRate)
    const [aedaudRate, setAedaudRate] = useState(rate.audRates.aedaudRate)
    const [audcadRate, setAudcadRate] = useState(rate.audRates.audcadRate)
    const [cadaudRate, setCadaudRate] = useState(rate.audRates.cadaudRate)
    const [audeurRate, setAudeurRate] = useState(rate.audRates.audeurRate)
    const [euraudRate, setEuraudRate] = useState(rate.audRates.euraudRate)
    const [audusdRate, setAudusdRate] = useState(rate.audRates.audusdRate)
    const [usdaudRate, setUsdaudRate] = useState(rate.audRates.usdaudRate)

    const [aedirrRate, setAedirrRate] = useState(rate.irrRates.aedirrRate)
    const [irraedRate, setIrraedRate] = useState(rate.irrRates.irraedRate)
    const [cadirrRate, setCadirrRate] = useState(rate.irrRates.cadirrRate)
    const [irrcadRate, setIrrcadRate] = useState(rate.irrRates.irrcadRate)
    const [eurirrRate, setEurirrRate] = useState(rate.irrRates.eurirrRate)
    const [irreurRate, setIrreurRate] = useState(rate.irrRates.irreurRate)
    const [trlirrRate, setTrlirrRate] = useState(rate.irrRates.trlirrRate)
    const [irrtrlRate, setIrrtrlRate] = useState(rate.irrRates.irrtrlRate)
    const [usdirrRate, setUsdirrRate] = useState(rate.irrRates.usdirrRate)
    const [irrusdRate, setIrrusdRate] = useState(rate.irrRates.irrusdRate)

    //---Suggestion
    const [audirrSell, setAudirrSell] = useState(rate.suggestionRates.audirrSell)
    const [irraudSell, setIrraudSell] = useState(rate.suggestionRates.irraudSell)
    const [audirrAED, setAudirrAED] = useState(rate.suggestionRates.audirrAED)
    const [irraudAED, setIrraudAED] = useState(rate.suggestionRates.irraudAED)
    const [audirrMarket, setAudirrMarket] = useState(rate.suggestionRates.audirrMarket)
    const [irraudMarket, setIrraudMarket] = useState(rate.suggestionRates.irraudMarket)
    const [audirrSuggestion, setAudirrSuggestion] = useState(rate.suggestionRates.audirrSuggestion)
    const [irraudSuggestion, setIrraudSuggestion] = useState(rate.suggestionRates.irraudSuggestion)

    //------------------------------
    //---Rates Handler
    //------------------------------
    const audirrHandler = (e) => {dispatch(updateaudirrRate(audirrRate))}
    const irraudHandler = (e) => {dispatch(updateirraudRate(irraudRate))}

    const audaedHandler = (e) => {dispatch(updateaudaedRate(audaedRate))}
    const aedaudHandler = (e) => {dispatch(updateaedaudRate(aedaudRate))}
    const audcadHandler = (e) => {dispatch(updateaudcadRate(audcadRate))}
    const cadaudHandler = (e) => {dispatch(updatecadaudRate(cadaudRate))}
    const audeurHandler = (e) => {dispatch(updateaudeurRate(audeurRate))}
    const euraudHandler = (e) => {dispatch(updateeuraudRate(euraudRate))}
    const audusdHandler = (e) => {dispatch(updateaudusdRate(audusdRate))}
    const usdaudHandler = (e) => {dispatch(updateusdaudRate(usdaudRate))}

    const aedirrHandler = (e) => {dispatch(updateaedirrRate(aedirrRate))}
    const irraedHandler = (e) => {dispatch(updateirraedRate(irraedRate))}
    const cadirrHandler = (e) => {dispatch(updatecadirrRate(cadirrRate))}
    const irrcadHandler = (e) => {dispatch(updateirrcadRate(irrcadRate))}
    const eurirrHandler = (e) => {dispatch(updateeurirrRate(eurirrRate))}
    const irreurHandler = (e) => {dispatch(updateirreurRate(irreurRate))}
    const trlirrHandler = (e) => {dispatch(updatetrlirrRate(trlirrRate))}
    const irrtrlHandler = (e) => {dispatch(updateirrtrlRate(irrtrlRate))}
    const usdirrHandler = (e) => {dispatch(updateusdirrRate(usdirrRate))}
    const irrusdHandler = (e) => {dispatch(updateirrusdRate(irrusdRate))}
    
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
                        <BoxContainer style={{width: "65vw"}}>
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
                                        <Title style={{width: "5vw", color: "#000080"}}>
                                            Suggestion
                                        </Title>
                                        <Content style={{color: "#000080"}}>
                                            {FormatNumber(audirrSuggestion,0)}
                                        </Content>
                                    </BoxContent>
                                    <BoxContent style={{width: "10vw"}}>
                                        <Title style={{width: "5vw", color: "#000080"}}>
                                            Suggestion
                                        </Title>
                                        <Content style={{color: "#000080"}}>
                                            {FormatNumber(irraudSuggestion,0)}
                                        </Content>
                                    </BoxContent>
                                </BoxContent>
                            </CustomBox>
                        </BoxContainer>
                    </CustomBox>
                    <CustomBox>
        {/* ---AUD Rates */}
                        <BoxContainer style={{width: "32vw"}}>
                            <CustomBox>
                                <BoxHeader style={{width: "25vw", marginLeft: "1vw", marginTop: "1vw"}}>
                                    <YellowLine>
                                        <Header>AUD Rates</Header>
                                    </YellowLine>
                                </BoxHeader>
                                <BoxContent style={{width: "30vw", marginLeft: "1vw", marginTop: "1vw"}}>
                                    <BoxContent style={{width: "13vw"}}>
                                        <Title style={{width: "5vw"}}>
                                            AUD / AED
                                        </Title>
                                        <InputNumber
                                            variant="filled"
                                            style={{width: "7vw"}}
                                            min={0}
                                            value={FormatNumber(audaedRate)}
                                            onChange={(value)=>{
                                                setAudaedRate(value)
                                            }}
                                            onKeyDown={audaedHandler}
                                        />
                                    </BoxContent>
                                    <BoxContent style={{width: "13vw"}}>
                                        <InputNumber
                                            variant="filled"
                                            style={{width: "7vw"}}
                                            min={0}
                                            value={FormatNumber(aedaudRate)}
                                            onChange={(value)=>{
                                                setAedaudRate(value)
                                            }}
                                            onKeyDown={aedaudHandler}
                                        />
                                    </BoxContent>
                                </BoxContent>
                                <BoxContent style={{width: "30vw", marginLeft: "1vw", marginTop: "1vw"}}>
                                    <BoxContent style={{width: "13vw"}}>
                                        <Title style={{width: "5vw"}}>
                                            AUD / CAD
                                        </Title>
                                        <InputNumber
                                            variant="filled"
                                            style={{width: "7vw"}}
                                            min={0}
                                            value={FormatNumber(audcadRate)}
                                            onChange={(value)=>{
                                                setAudcadRate(value)
                                            }}
                                            onKeyDown={audcadHandler}
                                        />
                                   </BoxContent>
                                    <BoxContent style={{width: "13vw"}}>
                                        <InputNumber
                                            variant="filled"
                                            style={{width: "7vw"}}
                                            min={0}
                                            value={FormatNumber(cadaudRate)}
                                            onChange={(value)=>{
                                                setCadaudRate(value)
                                            }}
                                            onKeyDown={cadaudHandler}
                                        />
                                    </BoxContent>
                                </BoxContent>
                                <BoxContent style={{width: "30vw", marginLeft: "1vw", marginTop: "1vw"}}>
                                    <BoxContent style={{width: "13vw"}}>
                                        <Title style={{width: "5vw"}}>
                                            AUD / EUR
                                        </Title>
                                        <InputNumber
                                            variant="filled"
                                            style={{width: "7vw"}}
                                            min={0}
                                            value={FormatNumber(audeurRate)}
                                            onChange={(value)=>{
                                                setAudeurRate(value)
                                            }}
                                            onKeyDown={audeurHandler}
                                        />
                                    </BoxContent>
                                    <BoxContent style={{width: "13vw"}}>
                                        <InputNumber
                                            variant="filled"
                                            style={{width: "7vw"}}
                                            min={0}
                                            value={FormatNumber(euraudRate)}
                                            onChange={(value)=>{
                                                setEuraudRate(value)
                                            }}
                                            onKeyDown={euraudHandler}
                                        />
                                    </BoxContent>
                                </BoxContent>
                                <BoxContent style={{width: "30vw", marginLeft: "1vw", marginTop: "1vw", marginBottom: "1vw"}}>
                                    <BoxContent style={{width: "13vw"}}>
                                        <Title style={{width: "5vw"}}>
                                            AUD / USD
                                        </Title>
                                        <InputNumber
                                            variant="filled"
                                            style={{width: "7vw"}}
                                            min={0}
                                            value={FormatNumber(audusdRate)}
                                            onChange={(value)=>{
                                                setAudusdRate(value)
                                            }}
                                            onKeyDown={audusdHandler}
                                        />
                                    </BoxContent>
                                    <BoxContent style={{width: "13vw"}}>
                                        <InputNumber
                                            variant="filled"
                                            style={{width: "7vw"}}
                                            min={0}
                                            value={FormatNumber(usdaudRate)}
                                            onChange={(value)=>{
                                                setUsdaudRate(value)
                                            }}
                                            onKeyDown={usdaudHandler}
                                        />
                                    </BoxContent>
                                </BoxContent>
                            </CustomBox>
                        </BoxContainer>
        {/* ---IRR Rates */}
                         <BoxContainer style={{width: "32vw"}}>
                            <CustomBox>
                                <BoxHeader style={{width: "25vw", marginLeft: "1vw", marginTop: "1vw"}}>
                                    <YellowLine>
                                        <Header>IRR Rates</Header>
                                    </YellowLine>
                                </BoxHeader>
                                <BoxContent style={{width: "30vw", marginLeft: "1vw", marginTop: "1vw"}}>
                                    <BoxContent style={{width: "13vw"}}>
                                        <Title style={{width: "5vw"}}>
                                            IRR / AED
                                        </Title>
                                        <InputNumber
                                            variant="filled"
                                            style={{width: "7vw"}}
                                            min={0}
                                            value={FormatNumber(irraedRate,0)}
                                            onChange={(value)=>{
                                                setIrraedRate(value)
                                            }}
                                            onKeyDown={irraedHandler}
                                        />
                                    </BoxContent>
                                    <BoxContent style={{width: "13vw"}}>
                                        <InputNumber
                                            variant="filled"
                                            style={{width: "7vw"}}
                                            min={0}
                                            value={FormatNumber(aedirrRate,0)}
                                            onChange={(value)=>{
                                                setAedirrRate(value)
                                            }}
                                            onKeyDown={aedirrHandler}
                                        />
                                    </BoxContent>
                                </BoxContent>
                                <BoxContent style={{width: "30vw", marginLeft: "1vw", marginTop: "1vw"}}>
                                    <BoxContent style={{width: "13vw"}}>
                                        <Title style={{width: "5vw"}}>
                                            IRR / CAD
                                        </Title>
                                        <InputNumber
                                            variant="filled"
                                            style={{width: "7vw"}}
                                            min={0}
                                            value={FormatNumber(irrcadRate,0)}
                                            onChange={(value)=>{
                                                setIrrcadRate(value)
                                            }}
                                            onKeyDown={irrcadHandler}
                                        />
                                    </BoxContent>
                                    <BoxContent style={{width: "13vw"}}>
                                        <InputNumber
                                            variant="filled"
                                            style={{width: "7vw"}}
                                            min={0}
                                            value={FormatNumber(cadirrRate,0)}
                                            onChange={(value)=>{
                                                setCadirrRate(value)
                                            }}
                                            onKeyDown={cadirrHandler}
                                        />
                                   </BoxContent>
                                </BoxContent>
                                <BoxContent style={{width: "30vw", marginLeft: "1vw", marginTop: "1vw"}}>
                                    <BoxContent style={{width: "13vw"}}>
                                        <Title style={{width: "5vw"}}>
                                            IRR / EUR
                                        </Title>
                                        <InputNumber
                                            variant="filled"
                                            style={{width: "7vw"}}
                                            min={0}
                                            value={FormatNumber(irreurRate,0)}
                                            onChange={(value)=>{
                                                setIrreurRate(value)
                                            }}
                                            onKeyDown={irreurHandler}
                                        />
                                    </BoxContent>
                                    <BoxContent style={{width: "13vw"}}>
                                        <InputNumber
                                            variant="filled"
                                            style={{width: "7vw"}}
                                            min={0}
                                            value={FormatNumber(eurirrRate,0)}
                                            onChange={(value)=>{
                                                setEurirrRate(value)
                                            }}
                                            onKeyDown={eurirrHandler}
                                        />
                                    </BoxContent>
                                </BoxContent>
                                <BoxContent style={{width: "30vw", marginLeft: "1vw", marginTop: "1vw"}}>
                                    <BoxContent style={{width: "13vw"}}>
                                        <Title style={{width: "5vw"}}>
                                            IRR / TRL
                                        </Title>
                                        <InputNumber
                                            variant="filled"
                                            style={{width: "7vw"}}
                                            min={0}
                                            value={FormatNumber(irrtrlRate,0)}
                                            onChange={(value)=>{
                                                setIrrtrlRate(value)
                                            }}
                                            onKeyDown={irrtrlHandler}
                                        />
                                    </BoxContent>
                                    <BoxContent style={{width: "13vw"}}>
                                        <InputNumber
                                            variant="filled"
                                            style={{width: "7vw"}}
                                            min={0}
                                            value={FormatNumber(trlirrRate,0)}
                                            onChange={(value)=>{
                                                setTrlirrRate(value)
                                            }}
                                            onKeyDown={trlirrHandler}
                                        />
                                    </BoxContent>
                                </BoxContent>
                                <BoxContent style={{width: "30vw", marginLeft: "1vw", marginTop: "1vw", marginBottom: "1vw"}}>
                                    <BoxContent style={{width: "13vw"}}>
                                        <Title style={{width: "5vw"}}>
                                            IRR / USD
                                        </Title>
                                        <InputNumber
                                            variant="filled"
                                            style={{width: "7vw"}}
                                            min={0}
                                            value={FormatNumber(irrusdRate,0)}
                                            onChange={(value)=>{
                                                setIrrusdRate(value)
                                            }}
                                            onKeyDown={irrusdHandler}
                                        />
                                    </BoxContent>
                                    <BoxContent style={{width: "13vw"}}>
                                        <InputNumber
                                            variant="filled"
                                            style={{width: "7vw"}}
                                            min={0}
                                            value={FormatNumber(usdirrRate,0)}
                                            onChange={(value)=>{
                                                setUsdirrRate(value)
                                            }}
                                            onKeyDown={usdirrHandler}
                                        />
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
