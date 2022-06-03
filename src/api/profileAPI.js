import instance from "./instance";

export const profileAPI = {
    getUserProfile(id){
        return instance.get(`profile/${id}`)
    }
}
