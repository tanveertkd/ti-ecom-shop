import axios from "axios"

const getProductById = async (productId) => {
    try{
        const response = await axios.get(`/api/products/${productId}`);
        if(response.status === 200)
            return response;
    }catch(error){
        console.log(error.response.status);
    }
}

export { getProductById };