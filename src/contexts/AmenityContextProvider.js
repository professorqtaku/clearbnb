import { createContext, useState, useEffect } from "react";

export const AmenityContext = createContext();

export default function AmenityContextProvider(props) {
  const [amenities, setAmenities] = useState();

  const fetchAmenities = async () => {
    let docs = await fetch("/rest/amenities");
    docs = await docs.json();
    setAmenities(docs);
  };

  useEffect(() => {
    fetchAmenities();
  }, []);

  const addAmenity = async (amenity) => {
    let res = await fetch("/rest/amenities", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(amenity),
    });
    res = await res.json();
    amenity.id = res.id;
    let newAmenities = [...amenities, ...amenity];
    setAmenities(newAmenities);
  };

  const values = {
    amenities,
    addAmenity,
    fetchAmenities,
  };

  return (
    <AmenityContext.Provider value={values}>
      {props.children}
    </AmenityContext.Provider>
  );
}
