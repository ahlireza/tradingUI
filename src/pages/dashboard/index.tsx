import { useState } from "react"
import { Scanning } from "iconsax-react"

import { PieChart } from "src/components/core/chart/PieChart"
import { CustomBox }    from "src/components/core/CustomBox"
import { Color }        from "src/definition/color"

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
    //---State
    const [audReceiveBalance, setAudReceiveBalance] = useState(243279)
    const [audUrgentBalance, setAudUrgentBalance] = useState(89000)
    const [irrReceiveBalance, setIrrReceiveBalance] = useState(45789250000)
    const [irrUrgentBalance, setIrrUrgentBalance] = useState(10000000000)

    //---Balance
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
    const [audirrRate, setAudirrRate] = useState(45000)
    const [irraudRate, setIrraudRate] = useState(46000)
    const [aedaudRate, setAedaudRate] = useState(2.39)
    const [aedirrRate, setAedirrRate] = useState(20000)
    const [irraedRate, setIrraedRate] = useState(20300)
    const [eurirrRate, setEurirrRate] = useState(79000)
    const [irreurRate, setIrreurRate] = useState(80000)
    const [trlirrRate, setTrlirrRate] = useState(22500)
    const [irrtrlRate, setIrrtrlRate] = useState(23000)
    const [usdirrRate, setUsdirrRate] = useState(70000)
    const [irrusdRate, setIrrusdRate] = useState(71000)

    const [days, setDays] = useState(2)
    const [audirrAverage, setAudirrAverage] = useState(44960)
    const [irraudAverage, setIrraudAverage] = useState(45760)

    //---Suggestion
    const [audirrSuggestion, setAudirrSuggestion] = useState(45200)
    const [audirrSell, setAudirrSell] = useState(45300)
    const [audirrAED, setAudirrAED] = useState(45900)
    const [audirrMarket, setAudirrMarket] = useState(45100)
    const [irraudSuggestion, setIrraudSuggestion] = useState(46200)
    const [irraudSell, setIrraudSell] = useState(46300)
    const [irraudAED, setIrraudAED] = useState(46900)
    const [irraudMarket, setIrraudMarket] = useState(46500)

    //---Competitors
    const [audirrMax, setAudirrMax] = useState(45100)
    const [irraudMin, setIraudMin] = useState(46200)
    const [audirrMoneyMex, setAudirrMoneyMex] = useState(45100)
    const [irraudMoneyMex, setIrraudMoneyMex] = useState(46200)
    const [audirrRosecap, setAudirrRosecap] = useState(45100)
    const [irraudRosecap, setIrraudRosecap] = useState(46200)
    const [audirrSeyhoon, setAudirrSeyhoon] = useState(45100)
    const [irraudSeyhoon, setIrraudSeyhoon] = useState(46200)
    const [audirrJavadi, setAudirrJavadi] = useState(45100)
    const [irraudJavadi, setIrraudJavadi] = useState(46200)
    const [audirrExpress, setAudirrExpress] = useState(45100)
    const [irraudExpress, setIrraudExpress] = useState(46200)
    const [audirrKangroos, setSudirrKangroos] = useState(45100)
    const [irraudKangroos, setIrrusdKangroos] = useState(46200)
    const [audirrRoomi, setAudirrRoomi] = useState(45100)
    const [irraudRoomi, setIrraudRoomi] = useState(46200)
    const [audirrAfshar, setAudirrAfshar] = useState(45100)
    const [irraudAfshar, setIrraudAfshar] = useState(46200)

    const [currencies, setCurrencies] = useState([
        {x: "AUD", y: audBalance},
        {x: "AED", y: aedBalance/aedaudRate},
        {x: "EUR", y: eurBalance*(eurirrRate/irraudRate)},
        {x: "TRL", y: trlBalance*(trlirrRate/irraudRate)},
        {x: "USD", y: usdBalance*(usdirrRate/irraudRate)}
    ])
    const customColors = [
        Color.BROWN_LIGHT,
        Color.BLUE,
        Color.YELLOW,
        Color.GREEN,
        Color.RED_LIGHT
    ]

    //------------------------------
    //---Average Days Handler
    //------------------------------
    const daysHandler = () => {
    }

    //------------------------------
    return (
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
                <BoxContent style={{width: "40vw", marginTop: "10px"}}>
                    <BoxName>
                        AUD Payment Balance: ${audReceiveBalance.toLocaleString("en-us", {minimumFractionDigits: 2, maximumFractionDigits: 2})}
                    </BoxName>
                </BoxContent>
                <BoxContent style={{width: "40vw", marginTop: "10px"}}>
                    <BoxName>
                        IRR Payment Balance: {irrReceiveBalance.toLocaleString("en-us")}
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
                                    <Content style={{marginLeft: "2vw", fontSize: "14px", color: Color.RED_LIGHT}}>
                                        {equalAUDBalance.toLocaleString("en-us", {minimumFractionDigits: 2, maximumFractionDigits: 2})}
                                    </Content>
                                    <Title style={{marginTop: "2vw"}}>AED Available</Title>
                                    <Content style={{marginLeft: "2vw", fontSize: "14px", color: Color.RED_LIGHT}}>
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
                                <Title style={{width: "4vw"}}>
                                    AUD
                                </Title>
                                <Content>
                                    {audBalance.toLocaleString("en-us", {minimumFractionDigits: 2, maximumFractionDigits: 2})}
                                </Content>
                            </BoxContent>
                            <BoxContent style={{width: "10vw", marginLeft: "1vw", justifyContent: "flex-start"}}>
                                <Title style={{width: "4vw"}}>
                                    AED
                                </Title>
                                <Content>
                                    {aedBalance.toLocaleString("en-us", {minimumFractionDigits: 2, maximumFractionDigits: 2})}
                                </Content>
                            </BoxContent>
                            <BoxContent style={{width: "10vw", marginLeft: "1vw", justifyContent: "flex-start"}}>
                                <Title style={{width: "4vw"}}>
                                    EUR
                                </Title>
                                <Content>
                                    {eurBalance.toLocaleString("en-us", {minimumFractionDigits: 2, maximumFractionDigits: 2})}
                                </Content>
                            </BoxContent>
                            <BoxContent style={{width: "10vw", marginLeft: "1vw", justifyContent: "flex-start"}}>
                                <Title style={{width: "4vw"}}>
                                    TRL
                                </Title>
                                <Content>
                                    {trlBalance.toLocaleString("en-us", {minimumFractionDigits: 2, maximumFractionDigits: 2})}
                                </Content>
                            </BoxContent>
                            <BoxContent style={{width: "10vw", marginLeft: "1vw", justifyContent: "flex-start", marginBottom: "1vw"}}>
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
                                <Header style={{color: Color.RED_LIGHT}}>
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
                                <Header style={{color: Color.RED_LIGHT}}>
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
                                    {audirrRate.toLocaleString("en-us")}
                                </Content>
                                <Content style={{color: Color.RED_LIGHT, fontSize: "14px"}}>
                                    {irraudRate.toLocaleString("en-us")}
                                </Content>
                            </BoxContent>
                            <BoxHeader style={{width: "15vw", marginLeft: "1vw"}}>
                                <Title>AUD / AED</Title>
                                <Content>{aedaudRate.toLocaleString("en-us")}</Content>
                                <Content>---</Content>
                            </BoxHeader>
                            <BoxContent style={{width: "15vw", marginLeft: "1vw", marginTop: "1vw"}}>
                                <Title>AED / IRR</Title>
                                <Content>{aedirrRate.toLocaleString("en-us")}</Content>
                                <Content>{irraedRate.toLocaleString("en-us")}</Content>
                            </BoxContent>
                            <BoxContent style={{width: "15vw", marginLeft: "1vw"}}>
                                <Title>EUR / IRR</Title>
                                <Content>{eurirrRate.toLocaleString("en-us")}</Content>
                                <Content>{irreurRate.toLocaleString("en-us")}</Content>
                            </BoxContent>
                            <BoxContent style={{width: "15vw", marginLeft: "1vw"}}>
                                <Title>TRL / IRR</Title>
                                <Content>{trlirrRate.toLocaleString("en-us")}</Content>
                                <Content>{irrtrlRate.toLocaleString("en-us")}</Content>
                            </BoxContent>
                            <BoxContent style={{width: "15vw", marginLeft: "1vw", marginBottom: "1vw"}}>
                                <Title>USD / IRR</Title>
                                <Content>{usdirrRate.toLocaleString("en-us")}</Content>
                                <Content>{irrusdRate.toLocaleString("en-us")}</Content>
                            </BoxContent>
                        </CustomBox>
        {/* ---Show Average Rates */}
                        <CustomBox>
                            <BoxHeader
                                style={{
                                    width: "15vw", marginLeft: "1vw",
                                    justifyContent: "flex-start"
                                }}
                            >
                            <Title>For</Title>
                                <Title
                                    style={{
                                        color: Color.RED_LIGHT,
                                        fontSize: "14px"
                                    }}
                                >
                                    {days}
                                </Title>
                                <Title>days</Title>
                            </BoxHeader>
                            <BoxContent style={{width: "15vw", marginRight: "2vw"}}>
                                <Title>Average AUD / IRR</Title>
                                <Content>{audirrAverage.toLocaleString("en-us")}</Content>
                            </BoxContent>
                            <BoxContent style={{width: "15vw", marginRight: "2vw", marginBottom: "10vw"}}>
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
                            <BoxHeader style={{width: "9vw", marginLeft: "8vw"}}>
                                <YellowLine>
                                    <Header style={{fontSize: "12px"}}>
                                        AUD/IRR
                                    </Header>
                                </YellowLine>
                                <YellowLine>
                                    <Header style={{fontSize: "12px"}}>
                                        IRR/AUD
                                    </Header>
                                </YellowLine>
                            </BoxHeader>
                            <BoxContent style={{width: "15vw", marginLeft: "1vw"}}>
                                <Title style={{width: "3vw"}}>
                                    MoneyMex
                                </Title>
                                <Content>{audirrMoneyMex.toLocaleString("en-us")}</Content>
                                <Content>{irraudMoneyMex.toLocaleString("en-us")}</Content>
                            </BoxContent>
                            <BoxContent style={{width: "15vw", marginLeft: "1vw"}}>
                                <Title style={{width: "3vw"}}>
                                    Rosecap
                                </Title>
                                <Content>{audirrRosecap.toLocaleString("en-us")}</Content>
                                <Content>{irraudRosecap.toLocaleString("en-us")}</Content>
                            </BoxContent>
                            <BoxContent style={{width: "15vw", marginLeft: "1vw"}}>
                                <Title style={{width: "3vw"}}>
                                    Seyhoon
                                </Title>
                                <Content>{audirrSeyhoon.toLocaleString("en-us")}</Content>
                                <Content>{irraudSeyhoon.toLocaleString("en-us")}</Content>
                            </BoxContent>
                            <BoxContent style={{width: "15vw", marginLeft: "1vw"}}>
                                <Title style={{width: "3vw"}}>
                                    Javadi
                                </Title>
                                <Content>{audirrJavadi.toLocaleString("en-us")}</Content>
                                <Content>{irraudJavadi.toLocaleString("en-us")}</Content>
                            </BoxContent>
                            <BoxContent style={{width: "15vw", marginLeft: "1vw"}}>
                                <Title style={{width: "3vw"}}>
                                    Express
                                </Title>
                                <Content>{audirrExpress.toLocaleString("en-us")}</Content>
                                <Content>{irraudExpress.toLocaleString("en-us")}</Content>
                            </BoxContent>
                            <BoxContent style={{width: "15vw", marginLeft: "1vw"}}>
                                <Title style={{width: "3vw"}}>
                                    Kangroos
                                </Title>
                                <Content>{audirrKangroos.toLocaleString("en-us")}</Content>
                                <Content>{irraudKangroos.toLocaleString("en-us")}</Content>
                            </BoxContent>
                            <BoxContent style={{width: "15vw", marginLeft: "1vw"}}>
                                <Title style={{width: "3vw"}}>
                                    Roomi
                                </Title>
                                <Content>{audirrRoomi.toLocaleString("en-us")}</Content>
                                <Content>{irraudRoomi.toLocaleString("en-us")}</Content>
                            </BoxContent>
                            <BoxContent style={{width: "15vw", marginLeft: "1vw", marginBottom: "1vw"}}>
                                <Title style={{width: "3vw"}}>
                                    Afshar
                                </Title>
                                <Content>{audirrAfshar.toLocaleString("en-us")}</Content>
                                <Content>{irraudAfshar.toLocaleString("en-us")}</Content>
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
    )
}
