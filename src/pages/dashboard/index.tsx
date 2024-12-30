import { useDispatch, useSelector } from "react-redux"
import { useState } from "react"
import { Scanning } from "iconsax-react"
import { Helmet }   from "react-helmet"

import { AppDispatch, RootState }   from "@/store"
import { updateDays }               from "src/store/actions/rates"

import { Input, InputNumber }    from "antd"

import { CustomBox }    from "src/components/core/CustomBox"
import { PieChart }     from "src/components/core/chart/PieChart"
import { Color }        from "src/definition/color"
import { FormatNumber } from "src/components/common/format"

import {
    BoxTitle,
    BoxSide,
    Name,
    RowContainer,
    BoxContainer,
    BoxHeader,
    YellowLine,
    BoxContent,
    BoxName,
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
    const [audirrSuggestion, setAudirrSuggestion] = useState(0)
    const [audirrSell, setAudirrSell] = useState(0)
    const [audirrAED, setAudirrAED] = useState(0)
    const [audirrMarket, setAudirrMarket] = useState(0)
    const [irraudSuggestion, setIrraudSuggestion] = useState(0)
    const [irraudSell, setIrraudSell] = useState(0)
    const [irraudAED, setIrraudAED] = useState(0)
    const [irraudMarket, setIrraudMarket] = useState(0)

    //---Competitors
    const [audirrMoneyMex, setAudirrMoneyMex] = useState(0)
    const [irraudMoneyMex, setIrraudMoneyMex] = useState(0)
    const [audirrRosecap, setAudirrRosecap] = useState(0)
    const [irraudRosecap, setIrraudRosecap] = useState(0)
    const [audirrSeyhoon, setAudirrSeyhoon] = useState(0)
    const [irraudSeyhoon, setIrraudSeyhoon] = useState(0)
    const [audirrJavadi, setAudirrJavadi] = useState(0)
    const [irraudJavadi, setIrraudJavadi] = useState(0)
    const [audirrExpress, setAudirrExpress] = useState(0)
    const [irraudExpress, setIrraudExpress] = useState(0)
    const [audirrKangroos, setSudirrKangroos] = useState(0)
    const [irraudKangroos, setIrrusdKangroos] = useState(0)
    const [audirrRoomi, setAudirrRoomi] = useState(0)
    const [irraudRoomi, setIrraudRoomi] = useState(0)
    const [audirrAfshar, setAudirrAfshar] = useState(0)
    const [irraudAfshar, setIrraudAfshar] = useState(0)

    const [audirrMax, setAudirrMax] = useState(0)
    const [irraudMin, setIraudMin] = useState(0)

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
    const CompetitorsHandler = (e) => {
        if (e.key === "Enter") {
            console.log(audirrMoneyMex)
        }
    }

    //------------------------------
    return (
        <>
            <Helmet>
                <title>NeoEx</title>
            </Helmet>
        <div>
    {/* ---Title, Balance and Urgent */}
            <RowContainer>
                <BoxTitle>
                    <BoxSide/>
                    <Scanning
                        size="20"
                        color="#808080"
                    />                  
                    <Name>Dashboard</Name>
                </BoxTitle>
                <BoxContent style={{width: "40vw", marginTop: "10px",   justifyContent: "flex-start"}}>
                    <BoxName>
                        AUD Payment Balance: 
                        {/* ${audReceiveBalance.toLocaleString("en-us", {minimumFractionDigits: 2, maximumFractionDigits: 2})} */}
                    </BoxName>
                    <BoxName style={{ color: Color.RED}}>
                        ${audReceiveBalance.toLocaleString("en-us", {minimumFractionDigits: 2, maximumFractionDigits: 2})}
                    </BoxName>
                </BoxContent>
                    <BoxContent style={{width: "40vw", marginTop: "10px",   justifyContent: "flex-start"}}>
                    <BoxName>
                        IRR Payment Balance:
                        {irrReceiveBalance.toLocaleString("en-us")}
                    </BoxName>
                    <BoxName style={{ color: Color.RED}}>
                        {irrReceiveBalance.toLocaleString("en-us")}
                    </BoxName>
                </BoxContent>
            </RowContainer>
            <RowContainer>
                <BoxContent
                    style = {{
                        width: "40vw",
                        marginLeft: "20vw",
                        marginBottom: "1vw"
                    }}>
                    <BoxName style={{ color: Color.RED_LIGHT }}>
                        Urgent: ${audUrgentBalance.toLocaleString("en-us", {minimumFractionDigits: 2, maximumFractionDigits: 2})}
                    </BoxName>
                </BoxContent>
                <BoxContent
                    style = {{
                        width: "40vw",
                        marginLeft: "10vw",
                        marginBottom: "1vw"
                    }}>
                    <BoxName style={{ color: Color.RED_LIGHT }}>
                        Urgent: {irrUrgentBalance.toLocaleString("en-us")}
                    </BoxName>
                </BoxContent>
            </RowContainer>
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
                                        {equalAUDBalance.toLocaleString("en-us", {minimumFractionDigits: 2, maximumFractionDigits: 2})}
                                    </Content>
                                    <Title style={{marginTop: "2vw"}}>AED Available</Title>
                                    <Content style={{marginLeft: "2vw", fontSize: "14px", color: Color.RED}}>
                                        {availableAED.toLocaleString("en-us", {minimumFractionDigits: 2, maximumFractionDigits: 2})}
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
                                    {audBalance.toLocaleString("en-us", {minimumFractionDigits: 2, maximumFractionDigits: 2})}
                                </Content>
                            </BoxContent>
                            <BoxContent style={{width: "10vw", marginLeft: "1vw", justifyContent: "flex-start"}}>
                                <div style={{ width: "10px", height: "10px", backgroundColor: aedColor}}></div>
                                <Title style={{width: "4vw"}}>
                                    AED
                                </Title>
                                <Content>
                                    {aedBalance.toLocaleString("en-us", {minimumFractionDigits: 2, maximumFractionDigits: 2})}
                                </Content>
                            </BoxContent>
                            <BoxContent style={{width: "10vw", marginLeft: "1vw", justifyContent: "flex-start"}}>
                                <div style={{ width: "10px", height: "10px", backgroundColor: eurColor}}></div>
                                <Title style={{width: "4vw"}}>
                                    EUR
                                </Title>
                                <Content>
                                    {eurBalance.toLocaleString("en-us", {minimumFractionDigits: 2, maximumFractionDigits: 2})}
                                </Content>
                            </BoxContent>
                            <BoxContent style={{width: "10vw", marginLeft: "1vw", justifyContent: "flex-start"}}>
                                <div style={{ width: "10px", height: "10px", backgroundColor: trlColor}}></div>
                                <Title style={{width: "4vw"}}>
                                    TRL
                                </Title>
                                <Content>
                                    {trlBalance.toLocaleString("en-us", {minimumFractionDigits: 2, maximumFractionDigits: 2})}
                                </Content>
                            </BoxContent>
                            <BoxContent style={{width: "10vw", marginLeft: "1vw", justifyContent: "flex-start", marginBottom: "1vw"}}>
                                <div style={{ width: "10px", height: "10px", backgroundColor: usdColor}}></div>
                                <Title style={{width: "4vw"}}>
                                    USD
                                </Title>
                                <Content>
                                    {usdBalance.toLocaleString("en-us", {minimumFractionDigits: 2, maximumFractionDigits: 2})}
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
                                    {audirrSuggestion.toLocaleString("en-us")}
                                </Header>
                                </BoxHeader>
                            <BoxContent style={{width: "15vw", marginLeft: "1vw", marginTop: "1vw"}}>
                                <Title>Based on Sell</Title>
                                <Content>{audirrSell.toLocaleString("en-us")}</Content>
                            </BoxContent>
                            <BoxContent style={{width: "15vw", marginLeft: "1vw"}}>
                                <Title>Based on AED</Title>
                                <Content>{audirrAED.toLocaleString("en-us")}</Content>
                            </BoxContent>
                            <BoxContent style={{width: "15vw", marginLeft: "1vw", marginBottom: "1vw"}}>
                                <Title>Based on Market</Title>
                                <Content>{audirrMarket.toLocaleString("en-us")}</Content>
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
                                    {irraudSuggestion.toLocaleString("en-us")}
                                </Header>
                            </BoxHeader>
                            <BoxContent style={{width: "15vw", marginLeft: "1vw", marginTop: "1vw"}}>
                                <Title>Based on Sell</Title>
                                <Content>{irraudSell.toLocaleString("en-us")}</Content>
                            </BoxContent>
                            <BoxContent style={{width: "15vw", marginLeft: "1vw"}}>
                                <Title>Based on AED</Title>
                                <Content>{irraudAED}</Content>
                            </BoxContent>
                            <BoxContent style={{width: "15vw", marginLeft: "1vw", marginBottom: "1vw"}}>
                                <Title>Based on Market</Title>
                                <Content>{irraudMarket.toLocaleString("en-us")}</Content>
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
                                    width: "15vw",
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
                            <BoxContent style={{width: "15vw", marginRight: "2vw"}}>
                                <Title>Average AUD / IRR</Title>
                                <Content>{audirrAverage.toLocaleString("en-us")}</Content>
                            </BoxContent>
                            <BoxContent style={{width: "15vw", marginRight: "2vw", marginBottom: "15vw"}}>
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
                            <BoxHeader style={{width: "11vw", marginLeft: "7vw"}}>
                                <YellowLine>
                                    <Header style={{fontSize: "12px"}}>
                                        AUD / IRR
                                    </Header>
                                </YellowLine>
                                <YellowLine>
                                    <Header style={{fontSize: "12px"}}>
                                        IRR / AUD
                                    </Header>
                                </YellowLine>
                            </BoxHeader>
                            <BoxContent style={{width: "18vw", marginLeft: "1vw"}}>
                                <Title style={{width: "3vw"}}>
                                    MoneyMex
                                </Title>
                                <Input
                                    placeholder={FormatNumber(audirrMoneyMex,0)}
                                    size="small"
                                    style={{
                                        width: "5vw",
                                    }}
                                    value={audirrMoneyMex}
                                    onChange={(value)=>{
                                        setAudirrMoneyMex(value)
                                    }}
                                    onKeyDown={CompetitorsHandler}
                                />
                                <Input
                                    placeholder={FormatNumber(irraudMoneyMex,0)}
                                    size="small"
                                    style={{
                                        width: "5vw",
                                    }}
                                    value={irraudMoneyMex}
                                    onChange={(value)=>{
                                        setIrraudMoneyMex(value)
                                    }}
                                    onKeyDown={CompetitorsHandler}
                                />
                            </BoxContent>
                            <BoxContent style={{width: "18vw", marginLeft: "1vw"}}>
                                <Title style={{width: "3vw"}}>
                                    Rosecap
                                </Title>
                                <Input
                                    placeholder={FormatNumber(audirrRosecap,0)}
                                    size="small"
                                    style={{
                                        width: "5vw",
                                    }}
                                    value={audirrRosecap}
                                    onChange={e => {
                                        setAedirrRate(value)
                                    }}
                                />
                                <Input
                                    placeholder={FormatNumber(irraudRosecap,0)}
                                    size="small"
                                    style={{
                                        width: "5vw",
                                    }}
                                    value={irraudRosecap}
                                    onChange={e => {
                                        setIrraedRate(value)
                                    }}
                                />
                            </BoxContent>
                            <BoxContent style={{width: "18vw", marginLeft: "1vw"}}>
                                <Title style={{width: "3vw"}}>
                                    Seyhoon
                                </Title>
                                <Input
                                    placeholder={FormatNumber(audirrSeyhoon,0)}
                                    size="small"
                                    style={{
                                        width: "5vw",
                                    }}
                                    value={audirrSeyhoon}
                                    onChange={e => {
                                        setAedirrRate(value)
                                    }}
                                />
                                <Input
                                    placeholder={FormatNumber(irraudSeyhoon,0)}
                                    size="small"
                                    style={{
                                        width: "5vw",
                                    }}
                                    value={irraudSeyhoon}
                                    onChange={e => {
                                        setIrraedRate(value)
                                    }}
                                />
                            </BoxContent>
                            <BoxContent style={{width: "18vw", marginLeft: "1vw"}}>
                                <Title style={{width: "3vw"}}>
                                    Javadi
                                </Title>
                                <Input
                                    placeholder={FormatNumber(audirrJavadi,0)}
                                    size="small"
                                    style={{
                                        width: "5vw",
                                    }}
                                    value={audirrJavadi}
                                    onChange={e => {
                                        setAedirrRate(value)
                                    }}
                                />
                                <Input
                                    placeholder={FormatNumber(irraudJavadi,0)}
                                    size="small"
                                    style={{
                                        width: "5vw",
                                    }}
                                    value={irraudJavadi}
                                    onChange={e => {
                                        setIrraedRate(value)
                                    }}
                                />
                            </BoxContent>
                            <BoxContent style={{width: "18vw", marginLeft: "1vw"}}>
                                <Title style={{width: "3vw"}}>
                                    Express
                                </Title>
                                <Input
                                    placeholder={FormatNumber(audirrExpress,0)}
                                    size="small"
                                    style={{
                                        width: "5vw",
                                    }}
                                    value={audirrExpress}
                                    onChange={e => {
                                        setAedirrRate(value)
                                    }}
                                />
                                <Input
                                    placeholder={FormatNumber(irraudExpress,0)}
                                    size="small"
                                    style={{
                                        width: "5vw",
                                    }}
                                    value={irraudExpress}
                                    onChange={e => {
                                        setIrraedRate(value)
                                    }}
                                />
                            </BoxContent>
                            <BoxContent style={{width: "18vw", marginLeft: "1vw"}}>
                                <Title style={{width: "3vw"}}>
                                    Kangroos
                                </Title>
                                <Input
                                    placeholder={FormatNumber(audirrKangroos,0)}
                                    size="small"
                                    style={{
                                        width: "5vw",
                                    }}
                                    value={audirrKangroos}
                                    onChange={e => {
                                        setAedirrRate(value)
                                    }}
                                />
                                <Input
                                    placeholder={FormatNumber(irraudKangroos,0)}
                                    size="small"
                                    style={{
                                        width: "5vw",
                                    }}
                                    value={irraudKangroos}
                                    onChange={e => {
                                        setIrraedRate(value)
                                    }}
                                />
                            </BoxContent>
                            <BoxContent style={{width: "18vw", marginLeft: "1vw"}}>
                                <Title style={{width: "3vw"}}>
                                    Roomi
                                </Title>
                                <Input
                                    placeholder={FormatNumber(audirrRoomi,0)}
                                    size="small"
                                    style={{
                                        width: "5vw",
                                    }}
                                    value={audirrRoomi}
                                    onChange={e => {
                                        setAedirrRate(value)
                                    }}
                                />
                                <Input
                                    placeholder={FormatNumber(irraudRoomi,0)}
                                    size="small"
                                    style={{
                                        width: "5vw",
                                    }}
                                    value={irraudRoomi}
                                    onChange={e => {
                                        setIrraedRate(value)
                                    }}
                                />
                            </BoxContent>
                            <BoxContent style={{width: "18vw", marginLeft: "1vw", marginBottom: "1vw"}}>
                                <Title style={{width: "3vw"}}>
                                    Afshar
                                </Title>
                                <Input
                                    placeholder={FormatNumber(audirrAfshar,0)}
                                    size="small"
                                    style={{
                                        width: "5vw",
                                    }}
                                    value={audirrAfshar}
                                    onChange={e => {
                                        setAedirrRate(value)
                                    }}
                                />
                                <Input
                                    placeholder={FormatNumber(irraudAfshar,0)}
                                    size="small"
                                    style={{
                                        width: "5vw",
                                    }}
                                    value={irraudAfshar}
                                    onChange={e => {
                                        setIrraedRate(value)
                                    }}
                                />
                            </BoxContent>
                        </CustomBox>
        {/* ---Show Max Market Rates */}
                        <CustomBox>
                            <BoxContent style={{width: "12vw", marginRight: "2vw", justifyContent: "flex-start"}}>
                                <YellowLine>
                                    <Title style={{width: "8vw"}}>
                                        Max AUD / IRR
                                    </Title>
                                </YellowLine>
                                    <Content>{audirrMax.toLocaleString("en-us")}</Content>
                            </BoxContent>
                            <BoxContent style={{width: "12vw", marginRight: "2vw", marginBottom: "10vw", justifyContent: "flex-start"}}>
                                <Title style={{width: "8vw"}}>
                                    Min IRR / AUD
                                </Title>
                                <Content>{irraudMin.toLocaleString("en-us")}</Content>
                            </BoxContent>
                        </CustomBox>
                    </BoxContainer>
                </CustomBox>
            </RowContainer>
        </div>
        </>
    )
}
