import {LS_TOKEN_KEY} from "../../../src/app/constants/storage";

export const isAuthenticated = (): boolean => {
    const token = localStorage.getItem(LS_TOKEN_KEY);
    return token !== null;
}