import instance from "./instance";

export const authApi = {
    getAuthMe() {
        return instance.get(`auth/me`).then(response => response.data)
    }
}
