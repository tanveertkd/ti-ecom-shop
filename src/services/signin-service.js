import axios from "axios";

const signInService = async (email, password) => {
    const response = await axios.post("/api/auth/login", {email, password});
    try{
        if(response.status === 200) {
            return response.data.encodedToken;
        } else {
            throw new Error("Couldn't signin", response);
        }
        
    }catch(e){
        console.log(e);
    }
};

export { signInService };