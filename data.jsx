import axios from "axios"

const api=axios.create({
    baseURL:"https://api.themoviedb.org/3",
    params:{
        api_key:"acab523c04262bff9d8b0083a743ee69"
    }
})

export const getdata=()=>{
    return api.get("discover/movie")
}