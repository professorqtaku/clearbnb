import { createContext, useState, useEffect } from "react";

export const AccommodationContext = createContext();

export default function AccommodationContextProvider(props) {
  const [accommodations, setAccommodations] = useState();

  const fetchAccommodations = async () => {
    let docs = await fetch("/rest/accommodations");
    docs = await docs.json();
    setAccommodations(docs);
  };

  useEffect(() => {
    fetchAccommodations();
  }, []);

  const addAccommodation = async (accommodation) => {
    let res = await fetch("/rest/accommodations", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(accommodation),
    });
    res = await res.json();
    accommodation.id = res.id;
    let newAccommodations = [...accommodations, ...accommodation];
    setAccommodations(newAccommodations);
  };

  const values = {
    accommodations,
    addAccommodation,
    fetchAccommodations,
  };

  return (
    <AccommodationContext.Provider value={values}>
      {props.children}
    </AccommodationContext.Provider>
  );
}
