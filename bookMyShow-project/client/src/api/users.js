const {axiosInstance} = require("./index");

//register a new user 
export const RegisterUser = async (value) => {
    try{
        const response = await axiosInstance.post("api/users/register", value);
        return response.data;
    }catch(err){
        console.log(err);
        return err.response.data;
    }
}

export const LoginUser = async (value) => {
    console.log(value)
    try{
        const response = await axiosInstance.post("api/users/login", value);
        return response.data;
    }catch(err){
        console.log(err);
        return err.response.data;
    }
}

export const GetCurrentUser = async (value) => {
    try{
        const response = await axiosInstance.get('api/users/current', value);
        return response.data;
    }catch(err){
        console.log(err);
        return err.response.data;
    }
}

export const ForgetPassword = async (value) => {
    try{
        const response = await axiosInstance.get('api/users/forgetpassword', value);
        return response.data;
    }catch(err){
        console.log(err);
        return err.response.data;
    }
}

export const ResetPassword = async (value) => {
    try{
        const response = await axiosInstance.get('api/users/resetpassword', value);
        return response.data;
    }catch(err){
        console.log(err);
        return err.response.data;
    }
}