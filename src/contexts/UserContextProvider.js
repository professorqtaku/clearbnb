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
      console.log(user);
    }, [user]);
  
  const login = async (email, password) => {
    let userInput = {
      email: email,
      password: password
    }

    let res = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"  },
      body: JSON.stringify(userInput),
    })
    res = await res.json()
    if(!res.error){
      setUser(res)
      return true
    }
    return false
  }

  const logout = async () => {
    let res = await fetch('/api/login', {
      method: "DELETE"
    })
    res = await res.json()
    if (res.success) {
      setUser(null)
      return true
    }
    return false
  }
  
  const values = {
    user,
    login,
    logout
  }
  
  return (
    <UserContext.Provider value={values}>
      {props.children}
    </UserContext.Provider>
  );
}