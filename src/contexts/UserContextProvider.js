import { createContext, useState, useEffect } from 'react'

export const UserContext = createContext()

export default function UserContextProvider(props) {

  const [user, setUser] = useState(null)

  const fetchUser = async () => {
    await fetch('/api/login')
      .then(async (res) => {
        return await res.json()
      })
      .then(user => {
        if(!user.error)
          setUser(user) 
      })
      .catch((e) => console.log('Already login error', e))
  }

    useEffect(() => {
      fetchUser();
    }, []);
   
    useEffect(() => {
      console.log(user !== null);
    }, [user]);

  
  const values = {
    user,
    setUser,
    fetchUser
  }
  
  return (
    <UserContext.Provider value={values}>
      {props.children}
    </UserContext.Provider>
  );
}