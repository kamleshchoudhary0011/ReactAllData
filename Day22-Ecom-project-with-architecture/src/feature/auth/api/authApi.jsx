import { api } from "../../../config/axiosInstance"


export const LoginUserApi =async (credencials)=>{
  try {

    let res = await api.post("/auth/login",credencials);

    console.log("?????????/",res.data);
    console.log("cccccccccccc/",credencials);
    return res.data
    
  } catch (error) {
    console.log("error in login api",error)
  }

}