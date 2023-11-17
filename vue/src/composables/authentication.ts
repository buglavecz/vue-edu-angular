import {LS_TOKEN_KEY, LS_TOKEN_VALUE} from "../../../src/app/constants/storage";
import {STATUS_PATH} from "../../../src/app/constants/routes";

import { useRouter } from 'vue-router'

export function useAuthentication() {
    const router = useRouter()

    const login = (): void => {
        localStorage.setItem(LS_TOKEN_KEY, LS_TOKEN_VALUE);
        router.push(STATUS_PATH);
    }
    return { login }
}