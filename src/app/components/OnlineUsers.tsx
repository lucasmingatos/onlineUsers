import { useContext } from "react";
import { CountContext } from "../contexts/CountContext";

export const OnlineUsers = () => {

    const countCtx = useContext(CountContext);

    const handleBanAll = () => {
        countCtx?.setOnlineCount(0);
    }

    return (
        <>
            <p>Online: {countCtx?.onlineCount}</p>
            <button onClick={handleBanAll}>Banir todos</button>
        </>
        
    );
}