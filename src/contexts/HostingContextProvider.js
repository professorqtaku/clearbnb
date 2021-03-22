import { createContext, useState, useEffect } from "react";

export const HostingContext = createContext();

export default function HostingContextProvider(props) {
  const [hostings, setHostings] = useState();

  const fetchHostings = async () => {
    let docs = await fetch("/rest/hostings");
    docs = await docs.json();
    setHostings(docs);
  };

  useEffect(() => {
    fetchHostings();
  }, []);

  const addHosting = async (hosting) => {
    let res = await fetch("/rest/hostings", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(hosting),
    });
    res = await res.json();
    if (res.error) {
      return false;
    }
    let newHostings = [...hostings, res];
    setHostings(newHostings);
    return res._id;
  };

  const values = {
    hostings,
    addHosting,
    fetchHostings,
  };

  return (
    <HostingContext.Provider value={values}>
      {props.children}
    </HostingContext.Provider>
  );
}
