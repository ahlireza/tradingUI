//------------------------------User Props
interface UserProps {
    user_code: string
    name: string
    email: string
    access: string
    token: string
  }

//------------------------------Rates Interface
export interface RateInterface {
  pair: string  
  price: number
}