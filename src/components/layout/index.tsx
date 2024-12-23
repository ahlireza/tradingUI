import { ReactNode } from "react"


import { GridContainer, GridRow } from "src/components/core/Grid"

import { Header } from "./header"



import {
  MainChaild,
  MainContainer
} from "./style"

//------------------------------
interface Props {
  children: ReactNode
}

//------------------------------
//---Layout
//------------------------------
export const Layout = ({ children }: Props) => {

  //------------------------------
  return (
    <div>
      <Header/>
      <GridContainer fluid={true}>
        <GridRow>
          <MainContainer>
            <MainChaild>
              {children}
            </MainChaild>
          </MainContainer>
        </GridRow>
      </GridContainer>
    </div >
  )
}
