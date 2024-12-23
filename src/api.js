import axios from "axios";

const API = axios.create({
    baseURL: 'https://emkc.org/api/v2/piston',
});

export const runCode = async(data) =>{
    const response = await API.post('/execute', {
            language: "javascript",
            version: "18.15.0",
            files: [
              {
                content: data
              }
            ],
    })
    return response.data
}