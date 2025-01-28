import React, { useState } from "react";
import UserContext from "./UserContext";

// In this file we will create the provider to add the data of jsx file to the context. ex:
//<provider>
  // <Home />
  // <Login />
// </provider>

const UserContextProvider = ({children}) =>{
  const [user, setUser] = useState(null);

  return(
    <UserContext.Provider value={{user, setUser}}>
      {children}
    </UserContext.Provider>
  )

}

export default UserContextProvider; // Exporting the provider to use it in other components.



