import axios from "axios"

const signupService = async (firstName, lastName, email, password) => {
    try{
        const response = await axios.post("/api/auth/signup", {
            firstName,
            lastName,
            email,
            password,
        });

        if(response.status === 201) {
            return response.data.encodedToken;
        }else{
            throw new Error("Couldn't create user", response);
        }
    } catch(e){
        console.log(e);
    }
}

export { signupService };