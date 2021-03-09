import { createContext, useState, useEffect } from 'react'

export const HostingContext = createContext()

export default function HostingContextProvider() {
  
  const [hostings, setHostings] = useState()

  const fetchHostings = async () => {
    let docs = await fetch('/rest/hostings')
    docs = await docs.json()
    setHostings(docs)
  }

  useEffect(() => {
    fetchHostings()
  }, [])

  const values = {
    hostings,
    setHostings
  }

  return (
    <HostingContext.Provider value={values}>
      {props.children}
    </HostingContext.Provider>
  )
}