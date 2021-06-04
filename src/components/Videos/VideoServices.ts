import axios from "axios";
import { IVideo } from "./Video";

const API = 'http://localhost:4000';

export const getVideos = async () => {
    return await axios.get<IVideo[]>(`${API}/video`);
    
}

export const createVideo = async (video:IVideo) => {
    return await axios.post(`${API}/video`, video);
    
}

export const getVideo = async (id: string) => {
    return await axios.get<IVideo>(`${API}/video/${id}`);
}

export const updateVideo = async (id: string, video:IVideo) => {
    return await axios.put(`${API}/video/${id}`, video);
    
}

export const deleteVideo = async (id: string) => {
    return await axios.delete(`${API}/video/${id}`);
    
}