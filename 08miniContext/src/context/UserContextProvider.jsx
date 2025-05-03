import React, {useState} from "react";

import UserContext from "./UserContext";

const UserContextProvider = ({children}) => {
    const [user, setUser] = useState(null)
    //whenever we create context in UserContext.js.
    //we retrive them and store them in user variable
    return(
        //here when the UserContext.Provider is run 
        // it accepts the children(props) and all props goes inside it for further use
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider