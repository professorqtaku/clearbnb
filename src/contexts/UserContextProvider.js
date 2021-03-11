import { createContext, useState, useEffect } from 'react'

export const UserContext = createContext()

export default function UserContextProvider(props) {

  const [user, setUser] = useState(null)

  const fetchUser = async () => {
    await fetch('/api/login')
      .then(async (res) => {
        return await res.json()
      })
      .then(user => setUser(user))
      .catch(() => {
        console.log('No user logged in');
      })
  }

    useEffect(() => {
      fetchUser();
      console.log(user, "res");
    }, []);
  
  const values = {
    user,
    setUser
    }
  
  return (
    <UserContext.Provider value={values}>
      {props.children}
    </UserContext.Provider>
  );
}