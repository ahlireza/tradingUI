import axios    from 'axios'

//------------------------------
//---Post Api
//------------------------------
export const PostApi = async (url: string, data: any) => {
    return await axios.post(`${ url }`, `${data}`)
}
