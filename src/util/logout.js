import useAuthentication from "../stores/useAuthentication";

export default function logout() {
    useAuthentication.setState((state) => ({
        ...state,
        accessToken: null,
        user: null
    }));
}