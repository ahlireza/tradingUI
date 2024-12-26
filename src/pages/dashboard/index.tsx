import { useState } from "react"
import { Scanning } from "iconsax-react"

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
    //---state
    const [audReceiveBalance, setAudReceiveBalance] = useState("243,279")
    const [audUrgentBalance, setAudUrgentBalance] = useState("89,000")
    const [irrReceiveBalance, setIrrReceiveBalance] = useState("45,789,250,000")
    const [irrUrgentBalance, setIrrUrgentBalance] = useState("10,000,000,000")

    const [audirrSuggestion, setAudirrSuggestion] = useState("45,200")
    const [audirrSell, setAudirrSell] = useState("45,300")
    const [audirrAED, setAudirrAED] = useState("45,900")
    const [audirrMarket, setAudirrMarket] = useState("45,100")
    const [irraudSuggestion, setIrraudSuggestion] = useState("46,200")
    const [irraudSell, setIrraudSell] = useState("46,300")
    const [irraudAED, setIrraudAED] = useState("46,900")
    const [irraudMarket, setIrraudMarket] = useState("46,500")

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
                    <BoxName>AUD Receive Balance: {audReceiveBalance}</BoxName>
                </BoxContent>
                <BoxContent style={{width: "40vw", marginTop: "10px"}}>
                    <BoxName>IRR Receive Balance: {irrReceiveBalance}</BoxName>
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
                        Urgent: {audUrgentBalance}
                    </BoxName>
                </BoxContent>
                <BoxContent
                    style = {{
                        width: "40vw",
                        marginLeft: "10vw",
                        marginBottom: "1vw"
                    }}>
                    <BoxName style={{ color: Color.RED_LIGHT }}>
                        Urgent: {irrUrgentBalance}
                    </BoxName>
                </BoxContent>
            </RowContainer>

    {/* ---Body */}
            <RowContainer>
                <CustomBox>
    {/* ---Assets */}
                    <BoxContainer style={{width: "60vw", marginLeft: "1vw"}}>
                        <CustomBox>
                            <BoxHeader style={{width: "50vw", marginLeft: "1vw"}}>
                                <YellowLine>
                                    <Header>Assets</Header>
                                </YellowLine>
                            </BoxHeader>
                            <BoxContent style={{width: "50vw", marginLeft: "1vw", marginTop: "1vw", marginBottom: "1vw"}}>
                                ???
                            </BoxContent>
                        </CustomBox>
                    </BoxContainer>
    {/* ---Rate Suggestion */}
                    <BoxContainer style={{width: "60vw", marginLeft: "1vw"}}>
        {/* ---AUD / IRR Rate Suggestion */}
                        <CustomBox>
                            <BoxName style={{marginTop: "2vw", marginBottom: "2vw"}}>
                                Rate Suggestion
                            </BoxName>
                            <BoxHeader style={{width: "15vw", marginLeft: "1vw"}}>
                                <YellowLine>
                                    <Header>AUD / IRR</Header>
                                </YellowLine>
                                <Header style={{color: Color.RED_LIGHT}}>
                                    {audirrSuggestion}
                                </Header>
                                </BoxHeader>
                            <BoxContent style={{width: "15vw", marginLeft: "1vw", marginTop: "1vw"}}>
                                <Title>Based on Sell</Title>
                                <Content>{audirrSell}</Content>
                            </BoxContent>
                            <BoxContent style={{width: "15vw", marginLeft: "1vw"}}>
                                <Title>Based on AED</Title>
                                <Content>{audirrAED}</Content>
                            </BoxContent>
                            <BoxContent style={{width: "15vw", marginLeft: "1vw", marginBottom: "1vw"}}>
                                <Title>Based on Market</Title>
                                <Content>{audirrMarket}</Content>
                            </BoxContent>
                        </CustomBox>
        {/* ---IRR / AUD Rate Suggestion */}
                        <CustomBox style={{width: "30vw"}}>
                            <BoxName style={{marginTop: "4vw", marginBottom: "2vw"}}>
                            </BoxName>
                            <BoxHeader style={{width: "15vw", marginLeft: "1vw"}}>
                                <YellowLine>
                                    <Header>IRR/ AUD</Header>
                                </YellowLine>
                                <Header style={{color: Color.RED_LIGHT}}>
                                    {irraudSuggestion}
                                </Header>
                                </BoxHeader>
                            <BoxContent style={{width: "15vw", marginLeft: "1vw", marginTop: "1vw"}}>
                                <Title>Based on Sell</Title>
                                <Content>{irraudSell}</Content>
                            </BoxContent>
                            <BoxContent style={{width: "15vw", marginLeft: "1vw"}}>
                                <Title>Based on AED</Title>
                                <Content>{irraudAED}</Content>
                            </BoxContent>
                            <BoxContent style={{width: "15vw", marginLeft: "1vw", marginBottom: "1vw"}}>
                                <Title>Based on Market</Title>
                                <Content>{irraudMarket}</Content>
                            </BoxContent>
                        </CustomBox>
                    </BoxContainer>
                </CustomBox>

                <CustomBox>
    {/* ---Rate */}
                    <BoxContainer style={{width: "36vw", marginRight: "2vw"}}>
                        <CustomBox>
                            <BoxHeader style={{width: "30vw", marginLeft: "1vw"}}>
                                <YellowLine>
                                    <Header>Rate</Header>
                                </YellowLine>
                            </BoxHeader>
                            <BoxContent style={{width: "50vw", marginLeft: "1vw", marginTop: "1vw", marginBottom: "1vw"}}>
                                ???
                            </BoxContent>
                        </CustomBox>
                    </BoxContainer>

                </CustomBox>
            </RowContainer>
        </div>
    )
}
