import useAuthentication from "../stores/useAuthentication";
import eventEmitter from "./eventEmitter";

export default function logout() {
    eventEmitter.emit("logout");
    useAuthentication.setState((state) => ({
        ...state,
        accessToken: null,
        user: null
    }));
    
}