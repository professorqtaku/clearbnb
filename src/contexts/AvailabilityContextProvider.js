import { createContext, useState, useEffect } from "react";

export const AvailabilityContext = createContext();

export default function AvailabilityContextProvider(props) {
  const [availabilities, setAvailabilities] = useState();

  const fetchAvailabilities = async () => {

    let docs = await fetch("/rest/availabilities");
    docs = await docs.json();
    setAvailabilities(docs);
  };

  useEffect(() => {
    fetchAvailabilities();
  }, []);

  const values = {
    availabilities,
    fetchAvailabilities,
  };

  return (
    <AvailabilityContext.Provider value={values}>
      {props.children}
    </AvailabilityContext.Provider>
  );
}
