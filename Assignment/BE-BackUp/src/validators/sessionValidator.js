import { useNavigate } from "react-router-dom";
import { SessionStorageKeys } from "../helper/constants";
import { SessionStorage } from "../util/SessionStorage";
import { isNullOrEmpty } from "../util/utils";

const SessionValidation = (Token) => {
    const navigate = useNavigate();
    if(isNullOrEmpty(Token) ){
        navigate('/')
    }
    return
}

export default SessionValidation;
