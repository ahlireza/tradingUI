import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState }      from "react"
import { Scanning } from "iconsax-react"
import { Helmet }   from "react-helmet"

import { InputNumber }    from "antd"

import { FormatNumber } from "src/components/common/format"
import { CustomBox }    from "src/components/core/CustomBox"
import { PieChart }     from "src/components/core/chart/PieChart"
import { Benefit }      from "src/definition/domain"
import { Color }        from "src/definition/color"

import { AppDispatch, RootState }   from "src/store"
import {
    updateDays,
    updateaudirrSell, updateirraudSell,
    updateaudirrAED, updateirraudAED,
    updateaudirrMarket, updateirraudMarket,
    updateaudirrSuggestion, updateirraudSuggestion
}   from "src/store/actions/rates"

import {
    updateaudirrMoneyMex, updateirraudMoneyMex,
    updateaudirrRosecap, updateirraudRosecap,
    updateaudirrSeyhoon, updateirraudSeyhoon,
    updateaudirrJavadi, updateirraudJavadi,
    updateaudirrExpress, updateirraudExpress,
    updateaudirrKangroos, updateirraudKangroos,
    updateaudirrRoomi, updateirraudRoomi,
    updateaudirrAfshar, updateirraudAfshar
} from "src/store/actions/competitors"

import {
    RowContainer,
    BoxTop,
    BoxTitle,
    BoxSide,
    BoxContainer,
    BoxName,
    BoxHeader,
    YellowLine,
    BoxContent,
    Name,
    Header,
    Title,
    Content,
} from "./style"

//------------------------------
//---Orders Header
//------------------------------
export const Dashboard = () => {
    const dispatch = useDispatch<AppDispatch>()

    //---State
    const rate = useSelector((state: RootState) => state.rates)
    const competitor = useSelector((state: RootState) => state.competitors)

    //---Balance
    const [audReceiveBalance, setAudReceiveBalance] = useState(243279)
    const [audUrgentBalance, setAudUrgentBalance] = useState(89000)
    const [irrReceiveBalance, setIrrReceiveBalance] = useState(45789250000)
    const [irrUrgentBalance, setIrrUrgentBalance] = useState(10000000000)

    const [equalAUDBalance, setEqualAUDBalance] = useState(10074898)
    const [availableAED, setAvailableAED] = useState(270345)

    const [audBalance, setAudBalance] = useState(50000)
    const [audMelbourne, setAudMelbourne] = useState(20000)
    const [audSydney, setAudSydney] = useState(30000)
    const [audTehran, setAudTehran] = useState(0)

    const [aedBalance, setAedBalance] = useState(270345)
    const [aedMelbopurne, setAudMelbopurne] = useState(0)
    const [aedSyndey, setAudSyndey] = useState(0)
    const [aedTehran, setAedTehran] = useState(270345)

    const [eurBalance, setEurBalance] = useState(3000)
    const [eurMelbourne, setEurMelbourne] = useState(1000)
    const [eurSydney, setEurSydney] = useState(2000)
    const [eurTehran, setEurTehran] = useState(27000)

    const [trlBalance, setTrlBalance] = useState(10000)
    const [trlMelbourne, setTrlMelbourne] = useState(0)
    const [trlSydney, setTrlSydney] = useState(0)
    const [trlTehran, setTrlTehran] = useState(100000)

    const [usdBalance, setUsdBalance] = useState(9000)
    const [usdMelbourne, setUsdMelbourne] = useState(20000)
    const [usdSydney, setUsdSydney] = useState(30000)
    const [usdTehran, setUsdTehran] = useState(40000)

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

    const [days, setDays] = useState(rate.days)
    const [audirrAverage, setAudirrAverage] = useState(0)
    const [irraudAverage, setIrraudAverage] = useState(0)

    //---Suggestion
    const [audirrSell, setAudirrSell] = useState(rate.audirrSell)
    const [irraudSell, setIrraudSell] = useState(rate.irraudSell)

    const [audirrAED, setAudirrAED] = useState(rate.audirrAED)
    const [irraudAED, setIrraudAED] = useState(rate.irraudAED)

    const [audirrMarket, setAudirrMarket] = useState(rate.audirrMarket)
    const [irraudMarket, setIrraudMarket] = useState(rate.irraudMarket)

    const [audirrSuggestion, setAudirrSuggestion] = useState(rate.audirrSuggestion)
    const [irraudSuggestion, setIrraudSuggestion] = useState(rate.irraudSuggestion)

    //---Competitors
    const [audirrMoneyMex, setAudirrMoneyMex] = useState(competitor.audirrMoneyMex)
    const [irraudMoneyMex, setIrraudMoneyMex] = useState(competitor.irraudMoneyMex)
    const [audirrRosecap, setAudirrRosecap] = useState(competitor.audirrRosecap)
    const [irraudRosecap, setIrraudRosecap] = useState(competitor.irraudRosecap)
    const [audirrSeyhoon, setAudirrSeyhoon] = useState(competitor.audirrSeyhoon)
    const [irraudSeyhoon, setIrraudSeyhoon] = useState(competitor.irraudSeyhoon)
    const [audirrJavadi, setAudirrJavadi] = useState(competitor.audirrJavadi)
    const [irraudJavadi, setIrraudJavadi] = useState(competitor.irraudJavadi)
    const [audirrExpress, setAudirrExpress] = useState(competitor.audirrExpress)
    const [irraudExpress, setIrraudExpress] = useState(competitor.irraudExpress)
    const [audirrKangroos, setAudirrKangroos] = useState(competitor.audirrKangroos)
    const [irraudKangroos, setIrraudKangroos] = useState(competitor.irraudKangroos)
    const [audirrRoomi, setAudirrRoomi] = useState(competitor.audirrRoomi)
    const [irraudRoomi, setIrraudRoomi] = useState(competitor.irraudRoomi)
    const [audirrAfshar, setAudirrAfshar] = useState(competitor.audirrAfshar)
    const [irraudAfshar, setIrraudAfshar] = useState(competitor.irraudAfshar)

    const [audirrMax, setAudirrMax] = useState(0)
    const [irraudMin, setIrraudMin] = useState(0)

    //---Chart
    const [currencies, setCurrencies] = useState([
        {x: "AUD", y: audBalance},
        {x: "AED", y: aedBalance/aedaudRate},
        {x: "EUR", y: eurBalance*(eurirrRate/irraudRate)},
        {x: "TRL", y: trlBalance*(trlirrRate/irraudRate)},
        {x: "USD", y: usdBalance*(usdirrRate/irraudRate)}
    ])
    const audColor = Color.BLUE
    const aedColor = Color.GREEN
    const eurColor = Color.BROWN_LIGHT
    const trlColor = Color.YELLOW
    const usdColor = Color.RED_LIGHT
    const customColors = [audColor, aedColor, eurColor, trlColor, usdColor]
    
    //------------------------------
    //---Average Days Handler
    //------------------------------
    const DaysHandler = (e) => {
        if (e.key === "Enter") {
            dispatch(updateDays(days))

            //------------------------------
            //---Average AUD / IRR Rates
            //------------------------------
        }
    }

    //------------------------------
    //---Competitor Rates Handler
    //------------------------------
    const MoneyMexaudirrHandler = (e) => {if (e.key === "Enter") {dispatch(updateaudirrMoneyMex(audirrMoneyMex))}}
    const MoneyMexirraudHandler = (e) => {if (e.key === "Enter") {dispatch(updateirraudMoneyMex(irraudMoneyMex))}}

    const RosecpaudirrHandler = (e) => {if (e.key === "Enter") {dispatch(updateaudirrRosecap(audirrRosecap))}}
    const RosecpirraudHandler = (e) => {if (e.key === "Enter") {dispatch(updateirraudRosecap(irraudRosecap))}}

    const SeyhoonaudirrHandler = (e) => {if (e.key === "Enter") {dispatch(updateaudirrSeyhoon(audirrSeyhoon))}}
    const SeyhoonirraudHandler = (e) => {if (e.key === "Enter") {dispatch(updateirraudSeyhoon(irraudSeyhoon))}}

    const JavadiaudirrHandler = (e) => {if (e.key === "Enter") {dispatch(updateaudirrJavadi(audirrJavadi))}}
    const JavadiirraudHandler = (e) => {if (e.key === "Enter") {dispatch(updateirraudJavadi(irraudJavadi))}}

    const ExpressaudirrHandler = (e) => {if (e.key === "Enter") {dispatch(updateaudirrExpress(audirrExpress))}}
    const ExpressirraudHandler = (e) => {if (e.key === "Enter") {dispatch(updateirraudExpress(irraudExpress))}}

    const KangroosaudirrHandler = (e) => {if (e.key === "Enter") {dispatch(updateaudirrKangroos(audirrKangroos))}}
    const KangroosirraudHandler = (e) => {if (e.key === "Enter") {dispatch(updateirraudKangroos(irraudKangroos))}}

    const RoomiaudirrHandler = (e) => {if (e.key === "Enter") {dispatch(updateaudirrRoomi(audirrRoomi))}}
    const RoomiirraudHandler = (e) => {if (e.key === "Enter") {dispatch(updateirraudRoomi(irraudRoomi))}}

    const AfsharaudirrHandler = (e) => {if (e.key === "Enter") {dispatch(updateaudirrAfshar(audirrAfshar))}}
    const AfsharirraudHandler = (e) => {if (e.key === "Enter") {dispatch(updateirraudAfshar(irraudAfshar))}}

    //------------------------------
    //---Suggestions Rates
    //------------------------------
    useEffect(() => {
        setAudirrMarket(audirrMax + Benefit.Market)
        setIrraudMarket(irraudMin - Benefit.Market)

        dispatch(updateaudirrMarket(audirrMarket))
        dispatch(updateirraudMarket(irraudMarket))
    }, [audirrMax, irraudMin])

    useEffect(() => {
        setAudirrSell((irraudRate * (1 - Benefit.AUDIRR)))
        setIrraudSell((audirrRate * (1 + Benefit.IRRAUD)))

        dispatch(updateaudirrSell(audirrSell))
        dispatch(updateirraudSell(irraudSell))
    }, [audirrRate, irraudRate])

    useEffect(() => {
        setAudirrAED(audaedRate * irraedRate)
        setIrraudAED(aedaudRate * aedirrRate)

        dispatch(updateaudirrAED(audirrAED))
        dispatch(updateirraudAED(irraudAED))
    }, [aedaudRate, audaedRate, aedirrRate, irraedRate])


    useEffect(() => {
        setAudirrSuggestion((Math.round(Math.min(audirrSell, audirrMarket)/1000)*1000))
        setIrraudSuggestion((Math.round(Math.max(irraudSell, irraudMarket)/1000)*1000))

        dispatch(updateaudirrSuggestion(audirrSuggestion))
        dispatch(updateirraudSuggestion(irraudSuggestion))
    }, [audirrSell, irraudSell, audirrMarket, irraudMarket])

    //------------------------------
    //---Competitors Max and Min Rates
    //------------------------------
    const MaxCompetitors = () => {
        return Math.max(audirrMoneyMex, audirrRosecap, audirrSeyhoon, audirrJavadi, audirrExpress, audirrKangroos, audirrRoomi, audirrAfshar)
    }

    const MinCompetitors = () => {
        return Math.min(irraudMoneyMex, irraudRosecap, irraudSeyhoon, irraudJavadi, irraudExpress, irraudKangroos, irraudRoomi, irraudAfshar)
    }

    useEffect(() => {
        setAudirrMax(MaxCompetitors())
    }, [audirrMoneyMex, audirrRosecap, audirrSeyhoon, audirrJavadi, audirrExpress, audirrKangroos, audirrRoomi, audirrAfshar])
    useEffect(() => {
        setIrraudMin(MinCompetitors())
    }, [irraudMoneyMex, irraudRosecap, irraudSeyhoon, irraudJavadi, irraudExpress, irraudKangroos, irraudRoomi, irraudAfshar])

    //------------------------------
    return (
        <>
            <Helmet>
                <title>NeoEx</title>
            </Helmet>
            <div>
        {/* ---Title, Balance and Urgent */}
                <BoxTop>
                    <BoxTitle>
                        <BoxSide/>
                        <Scanning
                            size="20px"
                            color="#808080"
                        />                  
                        <Name>Dashboard</Name>
                    </BoxTitle>
                    <BoxContent style={{width: "40vw", marginTop: "10px",   justifyContent: "flex-start"}}>
                        <BoxName>
                            AUD Payment Balance: 
                        </BoxName>
                        <BoxName style={{ color: Color.RED}}>
                            ${FormatNumber(audReceiveBalance,2)}
                        </BoxName>
                    </BoxContent>
                    <BoxContent style={{width: "40vw", marginTop: "10px",   justifyContent: "flex-start"}}>
                        <BoxName>
                            IRR Payment Balance:
                        </BoxName>
                        <BoxName style={{ color: Color.RED}}>
                            {FormatNumber(irrReceiveBalance,0)}
                        </BoxName>
                    </BoxContent>
                </BoxTop>
                <BoxTop>
                    <BoxContent
                        style = {{
                            width: "40vw",
                            marginLeft: "20vw",
                            marginBottom: "1vw"
                        }}>
                        <BoxName style={{ color: Color.RED_LIGHT }}>
                            Urgent: ${FormatNumber(audUrgentBalance,2)}
                        </BoxName>
                    </BoxContent>
                    <BoxContent
                        style = {{
                            width: "40vw",
                            marginLeft: "10vw",
                            marginBottom: "1vw"
                        }}>
                        <BoxName style={{ color: Color.RED_LIGHT }}>
                            Urgent: {FormatNumber(irrUrgentBalance,0)}
                        </BoxName>
                    </BoxContent>
                </BoxTop>
                <BoxContainer style={{marginLeft: "1vw"}}/>
        {/* ---Body */}
                <RowContainer>
                    <CustomBox>
            {/* ---Assets */}
                    <BoxContainer style={{width: "60vw", marginLeft: "1vw"}}>
            {/* ---Show Equal Balance */}
                            <CustomBox>
                                <BoxHeader style={{width: "10vw", marginLeft: "1vw"}}>
                                    <YellowLine>
                                        <Header>Assets</Header>
                                    </YellowLine>
                                </BoxHeader>
                                <BoxContent style={{width: "10vw", marginLeft: "1vw", marginTop: "1vw", marginBottom: "1vw"}}>
                                    <CustomBox>
                                        <Title>Equal AUD Balance</Title>
                                        <Content style={{marginLeft: "2vw", fontSize: "14px", color: Color.RED}}>
                                            {FormatNumber(equalAUDBalance,2)}
                                        </Content>
                                        <Title style={{marginTop: "2vw"}}>AED Available</Title>
                                        <Content style={{marginLeft: "2vw", fontSize: "14px", color: Color.RED}}>
                                            {FormatNumber(availableAED,2)}
                                        </Content>
                                    </CustomBox>
                                </BoxContent>
                            </CustomBox>
            {/* ---Show Chart */}
                            <CustomBox>
                                <BoxContent style={{width: "20vw", marginLeft: "5vw"}}>
                                    <PieChart
                                        data={currencies}
                                        colors={customColors}
                                    />
                                </BoxContent>
                            </CustomBox>
            {/* ---Show Equal Balance */}
                            <CustomBox>
                                <BoxContent style={{width: "15vw", marginLeft: "1vw", justifyContent: "flex-start", marginTop: "1vw"}}>
                                    <div style={{ width: "10px", height: "10px", backgroundColor: audColor}}></div>
                                    <Title style={{width: "4vw"}}>
                                        AUD
                                    </Title>
                                    <Content>
                                        {FormatNumber(audBalance,2)}
                                    </Content>
                                </BoxContent>
                                <BoxContent style={{width: "10vw", marginLeft: "1vw", justifyContent: "flex-start"}}>
                                    <div style={{ width: "10px", height: "10px", backgroundColor: aedColor}}></div>
                                    <Title style={{width: "4vw"}}>
                                        AED
                                    </Title>
                                    <Content>
                                        {FormatNumber(aedBalance,2)}
                                    </Content>
                                </BoxContent>
                                <BoxContent style={{width: "10vw", marginLeft: "1vw", justifyContent: "flex-start"}}>
                                    <div style={{ width: "10px", height: "10px", backgroundColor: eurColor}}></div>
                                    <Title style={{width: "4vw"}}>
                                        EUR
                                    </Title>
                                    <Content>
                                        {FormatNumber(eurBalance,2)}
                                    </Content>
                                </BoxContent>
                                <BoxContent style={{width: "10vw", marginLeft: "1vw", justifyContent: "flex-start"}}>
                                    <div style={{ width: "10px", height: "10px", backgroundColor: trlColor}}></div>
                                    <Title style={{width: "4vw"}}>
                                        TRL
                                    </Title>
                                    <Content>
                                        {FormatNumber(trlBalance,2)}
                                    </Content>
                                </BoxContent>
                                <BoxContent style={{width: "10vw", marginLeft: "1vw", justifyContent: "flex-start", marginBottom: "1vw"}}>
                                    <div style={{ width: "10px", height: "10px", backgroundColor: usdColor}}></div>
                                    <Title style={{width: "4vw"}}>
                                        USD
                                    </Title>
                                    <Content>
                                        {FormatNumber(usdBalance,2)}
                                    </Content>
                                </BoxContent>
                            </CustomBox>
                        </BoxContainer>

        {/* ---Rate Suggestion */}
                        <BoxContainer style={{width: "60vw", marginLeft: "1vw"}}>
            {/* ---AUD / IRR Rate Suggestion */}
                            <CustomBox>
                                <BoxName style={{marginTop: "2vw", marginBottom: "1vw"}}>
                                    Rate Suggestion
                                </BoxName>
                                <BoxHeader style={{width: "15vw", marginLeft: "1vw"}}>
                                    <YellowLine>
                                        <Header>AUD / IRR</Header>
                                    </YellowLine>
                                    <Header style={{color: Color.RED}}>
                                        {FormatNumber(audirrSuggestion,0)}
                                    </Header>
                                    </BoxHeader>
                                <BoxContent style={{width: "15vw", marginLeft: "1vw", marginTop: "1vw"}}>
                                    <Title>Based on Market</Title>
                                    <Content>{FormatNumber(audirrMarket,0)}</Content>
                                </BoxContent>
                                <BoxContent style={{width: "15vw", marginLeft: "1vw"}}>
                                    <Title>Based on Sell</Title>
                                    <Content>{FormatNumber(audirrSell,0)}</Content>
                                </BoxContent>
                                <BoxContent style={{width: "15vw", marginLeft: "1vw", marginBottom: "1vw"}}>
                                    <Title>Based on AED</Title>
                                    <Content>{FormatNumber(audirrAED,0)}</Content>
                                </BoxContent>
                            </CustomBox>
            {/* ---IRR / AUD Rate Suggestion */}
                            <CustomBox style={{width: "30vw"}}>
                                <BoxName style={{marginTop: "4vw", marginBottom: "1vw"}}/>
                                <BoxHeader style={{width: "15vw", marginLeft: "1vw"}}>
                                    <YellowLine>
                                        <Header>IRR/ AUD</Header>
                                    </YellowLine>
                                    <Header style={{color: Color.RED}}>
                                        {FormatNumber(irraudSuggestion,0)}
                                    </Header>
                                </BoxHeader>
                                <BoxContent style={{width: "15vw", marginLeft: "1vw", marginTop: "1vw"}}>
                                    <Title>Based on Market</Title>
                                    <Content>{FormatNumber(irraudMarket,0)}</Content>
                                </BoxContent>
                                <BoxContent style={{width: "15vw", marginLeft: "1vw"}}>
                                    <Title>Based on Sell</Title>
                                    <Content>{FormatNumber(irraudSell,0)}</Content>
                                </BoxContent>
                                <BoxContent style={{width: "15vw", marginLeft: "1vw", marginBottom: "1vw"}}>
                                    <Title>Based on AED</Title>
                                    <Content>{FormatNumber(irraudAED,0)}</Content>
                                </BoxContent>
                            </CustomBox>
                        </BoxContainer>
                    </CustomBox>

                    <CustomBox>
        {/* ---Rate */}
                        <BoxContainer style={{width: "36vw", marginRight: "1vw"}}>
            {/* ---Show Rates */}
                            <CustomBox>
                                <BoxHeader style={{width: "15vw", marginLeft: "1vw"}}>
                                    <YellowLine>
                                        <Header>Rate</Header>
                                    </YellowLine>
                                </BoxHeader>
                                <BoxContent style={{width: "15vw", marginLeft: "1vw", marginTop: "1vw"}}>
                                    <Title>AUD / IRR</Title>
                                    <Content style={{color: Color.RED_LIGHT, fontSize: "14px"}}>
                                        {FormatNumber(audirrRate,0)}
                                    </Content>
                                    <Content style={{color: Color.RED_LIGHT, fontSize: "14px"}}>
                                        {FormatNumber(irraudRate,0)}
                                    </Content>
                                </BoxContent>
                                <BoxContent style={{width: "15vw", marginLeft: "1vw"}}>
                                    <Title>AUD / AED</Title>
                                    <Content>{FormatNumber(audaedRate)}</Content>
                                    <Content>{FormatNumber(aedaudRate)}</Content>
                                </BoxContent>
                                <BoxContent style={{width: "15vw", marginLeft: "1vw"}}>
                                    <Title>AUD / EUR</Title>
                                    <Content>{FormatNumber(audeurRate)}</Content>
                                    <Content>{FormatNumber(euraudRate)}</Content>
                                </BoxContent>
                                <BoxHeader style={{width: "15vw", marginLeft: "1vw"}}>
                                    <Title>AUD / USD</Title>
                                    <Content>{FormatNumber(audusdRate)}</Content>
                                    <Content>{FormatNumber(usdaudRate)}</Content>
                                </BoxHeader>

                                <BoxContent style={{width: "15vw", marginLeft: "1vw", marginTop: "1vw"}}>
                                    <Title>AED / IRR</Title>
                                    <Content>{FormatNumber(aedirrRate,0)}</Content>
                                    <Content>{FormatNumber(irraedRate,0)}</Content>
                                </BoxContent>
                                <BoxContent style={{width: "15vw", marginLeft: "1vw"}}>
                                    <Title>EUR / IRR</Title>
                                    <Content>{FormatNumber(eurirrRate,0)}</Content>
                                    <Content>{FormatNumber(irreurRate,0)}</Content>
                                </BoxContent>
                                <BoxContent style={{width: "15vw", marginLeft: "1vw"}}>
                                    <Title>TRL / IRR</Title>
                                    <Content>{FormatNumber(trlirrRate,0)}</Content>
                                    <Content>{FormatNumber(irrtrlRate,0)}</Content>
                                </BoxContent>
                                <BoxContent style={{width: "15vw", marginLeft: "1vw", marginBottom: "1vw"}}>
                                    <Title>USD / IRR</Title>
                                    <Content>{FormatNumber(usdirrRate,0)}</Content>
                                    <Content>{FormatNumber(irrusdRate,0)}</Content>
                                </BoxContent>
                            </CustomBox>
            {/* ---Show Average Rates */}
                            <CustomBox>
                                <BoxHeader
                                    style={{
                                        width: "10vw",
                                        marginLeft: "1vw",
                                        justifyContent: "flex-start"
                                    }}
                                >
                                    <Title>For</Title>
                                    <InputNumber
                                        size = "small"
                                        variant="filled"
                                        style = {{
                                            width: "4vw", height: "1.5vw",
                                            marginLeft: "1vw",
                                            fontFamily: "Montserrat", fontWeight: "600",
                                        }}
                                        min={1}
                                        max={365}
                                        value={days}
                                        onChange={(value)=>{
                                            setDays(value)
                                        }}
                                        onKeyDown={DaysHandler}
                                    />
                                    <Title>days</Title>
                                </BoxHeader>
                                <BoxContent style={{width: "10vw", marginRight: "2vw"}}>
                                    <Title>Average AUD / IRR</Title>
                                    <Content>{audirrAverage.toLocaleString("en-us")}</Content>
                                </BoxContent>
                                <BoxContent style={{width: "10vw", marginRight: "2vw", marginBottom: "15vw"}}>
                                    <Title>Average IRR / AUD</Title>
                                    <Content>{irraudAverage.toLocaleString("en-us")}</Content>
                                </BoxContent>
                            </CustomBox>
                        </BoxContainer>

        {/* ---Competitors */}
                        <BoxContainer style={{width: "36vw", marginRight: "1vw"}}>
            {/* ---Show Competitors Rates */}
                            <CustomBox>
                                <BoxName style={{marginTop: "2vw", marginBottom: "1vw"}}>
                                    Competitors
                                </BoxName>
                                <BoxHeader style={{width: "16vw", marginLeft: "7vw"}}>
                                    <YellowLine>
                                        <Header style={{width: "7vw", fontSize: "12px"}}>
                                            AUD / IRR
                                        </Header>
                                    </YellowLine>
                                    <YellowLine>
                                        <Header style={{width: "7vw", fontSize: "12px"}}>
                                            IRR / AUD
                                        </Header>
                                    </YellowLine>
                                </BoxHeader>
                                <BoxContent style={{width: "22vw", marginLeft: "1vw"}}>
                                    <Title style={{width: "3vw"}}>
                                        MoneyMex
                                    </Title>
                                    <InputNumber
                                        size="small"
                                        variant="filled"
                                        style={{
                                            width: "7vw",
                                        }}
                                        min={0}
                                        value={FormatNumber(audirrMoneyMex,0)}
                                        onChange={(value)=>{
                                            setAudirrMoneyMex(value)
                                        }}
                                        onKeyDown={MoneyMexaudirrHandler}
                                    />
                                    <InputNumber
                                        size="small"
                                        variant="filled"
                                        style={{
                                            width: "7vw",
                                        }}
                                        min={0}
                                        value={FormatNumber(irraudMoneyMex,0)}
                                        onChange={(value)=>{
                                            setIrraudMoneyMex(value)
                                        }}
                                        onKeyDown={MoneyMexirraudHandler}
                                    />
                                </BoxContent>
                                <BoxContent style={{width: "22vw", marginLeft: "1vw"}}>
                                    <Title style={{width: "3vw"}}>
                                        Rosecap
                                    </Title>
                                    <InputNumber
                                        variant="filled"
                                        size="small"
                                        style={{
                                            width: "7vw",
                                        }}
                                        min={0}
                                        value={FormatNumber(audirrRosecap,0)}
                                        onChange={(value)=>{
                                            setAudirrRosecap(value)
                                        }}
                                        onKeyDown={RosecpaudirrHandler}
                                    />
                                    <InputNumber
                                        variant="filled"
                                        size="small"
                                        style={{
                                            width: "7vw",
                                        }}
                                        min={0}
                                        value={FormatNumber(irraudRosecap,0)}
                                        onChange={(value)=>{
                                            setIrraudRosecap(value)
                                        }}
                                        onKeyDown={RosecpirraudHandler}
                                    />
                                </BoxContent>
                                <BoxContent style={{width: "22vw", marginLeft: "1vw"}}>
                                    <Title style={{width: "3vw"}}>
                                        Seyhoon
                                    </Title>
                                    <InputNumber
                                        variant="filled"
                                        size="small"
                                        style={{
                                            width: "7vw",
                                        }}
                                        min={0}
                                        value={FormatNumber(audirrSeyhoon,0)}
                                        onChange={(value)=>{
                                            setAudirrSeyhoon(value)
                                        }}
                                        onKeyDown={SeyhoonaudirrHandler}
                                    />
                                    <InputNumber
                                        variant="filled"
                                        size="small"
                                        style={{
                                            width: "7vw",
                                        }}
                                        min={0}
                                        value={FormatNumber(irraudSeyhoon,0)}
                                        onChange={(value)=>{
                                            setIrraudSeyhoon(value)
                                        }}
                                        onKeyDown={SeyhoonirraudHandler}
                                    />
                                </BoxContent>
                                <BoxContent style={{width: "22vw", marginLeft: "1vw"}}>
                                    <Title style={{width: "3vw"}}>
                                        Javadi
                                    </Title>
                                    <InputNumber
                                        variant="filled"
                                        size="small"
                                        style={{
                                            width: "7vw",
                                        }}
                                        min={0}
                                        value={FormatNumber(audirrJavadi,0)}
                                        onChange={(value)=>{
                                            setAudirrJavadi(value)
                                        }}
                                        onKeyDown={JavadiaudirrHandler}
                                    />
                                    <InputNumber
                                        variant="filled"
                                        size="small"
                                        style={{
                                            width: "7vw",
                                        }}
                                        min={0}
                                        value={FormatNumber(irraudJavadi,0)}
                                        onChange={(value)=>{
                                            setIrraudJavadi(value)
                                        }}
                                        onKeyDown={JavadiirraudHandler}
                                    />
                                </BoxContent>
                                <BoxContent style={{width: "22vw", marginLeft: "1vw"}}>
                                    <Title style={{width: "3vw"}}>
                                        Express
                                    </Title>
                                    <InputNumber
                                        variant="filled"
                                        size="small"
                                        style={{
                                            width: "7vw",
                                        }}
                                        min={0}
                                        value={FormatNumber(audirrExpress,0)}
                                        onChange={(value)=>{
                                            setAudirrExpress(value)
                                        }}
                                        onKeyDown={ExpressaudirrHandler}
                                    />
                                    <InputNumber
                                        variant="filled"
                                        size="small"
                                        style={{
                                            width: "7vw",
                                        }}
                                        min={0}
                                        value={FormatNumber(irraudExpress,0)}
                                        onChange={(value)=>{
                                            setIrraudExpress(value)
                                        }}
                                        onKeyDown={ExpressirraudHandler}
                                    />
                                </BoxContent>
                                <BoxContent style={{width: "22vw", marginLeft: "1vw"}}>
                                    <Title style={{width: "3vw"}}>
                                        Kangroos
                                    </Title>
                                    <InputNumber
                                        variant="filled"
                                        size="small"
                                        style={{
                                            width: "7vw",
                                        }}
                                        min={0}
                                        value={FormatNumber(audirrKangroos,0)}
                                        onChange={(value)=>{
                                            setAudirrKangroos(value)
                                        }}
                                        onKeyDown={KangroosaudirrHandler}
                                    />
                                    <InputNumber
                                        variant="filled"
                                        size="small"
                                        style={{
                                            width: "7vw",
                                        }}
                                        min={0}
                                        value={FormatNumber(irraudKangroos,0)}
                                        onChange={(value)=>{
                                            setIrraudKangroos(value)
                                        }}
                                        onKeyDown={KangroosirraudHandler}
                                    />
                                </BoxContent>
                                <BoxContent style={{width: "22vw", marginLeft: "1vw"}}>
                                    <Title style={{width: "3vw"}}>
                                        Roomi
                                    </Title>
                                    <InputNumber
                                        variant="filled"
                                        size="small"
                                        style={{
                                            width: "7vw",
                                        }}
                                        min={0}
                                        value={FormatNumber(audirrRoomi,0)}
                                        onChange={(value)=>{
                                            setAudirrRoomi(value)
                                        }}
                                        onKeyDown={RoomiaudirrHandler}
                                    />
                                    <InputNumber
                                        variant="filled"
                                        size="small"
                                        style={{
                                            width: "7vw",
                                        }}
                                        min={0}
                                        value={FormatNumber(irraudRoomi,0)}
                                        onChange={(value)=>{
                                            setIrraudRoomi(value)
                                        }}
                                        onKeyDown={RoomiirraudHandler}
                                    />
                                </BoxContent>
                                <BoxContent style={{width: "22vw", marginLeft: "1vw", marginBottom: "1vw"}}>
                                    <Title style={{width: "3vw"}}>
                                        Afshar
                                    </Title>
                                    <InputNumber
                                        variant="filled"
                                        size="small"
                                        style={{
                                            width: "7vw",
                                        }}
                                        min={0}
                                        value={FormatNumber(audirrAfshar,0)}
                                        onChange={(value)=>{
                                            setAudirrAfshar(value)
                                        }}
                                        onKeyDown={AfsharaudirrHandler}
                                    />
                                    <InputNumber
                                        variant="filled"
                                        size="small"
                                        style={{
                                            width: "7vw",
                                        }}
                                        min={0}
                                        value={FormatNumber(irraudAfshar,0)}
                                        onChange={(value)=>{
                                            setIrraudAfshar(value)
                                        }}
                                        onKeyDown={AfsharirraudHandler}
                                    />
                                </BoxContent>
                            </CustomBox>
            {/* ---Show Max Market Rates */}
                            <CustomBox>
                                <BoxContent style={{width: "10vw", marginLeft: "1vw", marginRight: "1vw", justifyContent: "flex-start"}}>
                                    <YellowLine>
                                        <Header style={{width: "7vw", fontSize: "10px"}}>
                                            Max AUD / IRR
                                        </Header>
                                    </YellowLine>
                                        <Content style={{fontSize: "10px"}}>
                                            {audirrMax.toLocaleString("en-us")}
                                        </Content>
                                </BoxContent>
                                <BoxContent style={{width: "10vw", marginLeft: "1vw", marginRight: "2vw", marginBottom: "10vw", justifyContent: "flex-start"}}>
                                    <Header style={{width: "7vw", fontSize: "10px"}}>
                                        Min IRR / AUD
                                    </Header>
                                    <Content style={{fontSize: "10px"}}>
                                        {irraudMin.toLocaleString("en-us")}
                                    </Content>
                                </BoxContent>
                            </CustomBox>
                        </BoxContainer>
                    </CustomBox>
                </RowContainer>
            </div>
        </>
    )
}
