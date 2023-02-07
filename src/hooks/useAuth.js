import { useSelector } from "react-redux";

export default function useAuth() {
    const auth = useSelector((state) => state.login);

    if (auth?.accessToken && auth?.user) {
        return true;
    } else {
        return false;
    }
}
