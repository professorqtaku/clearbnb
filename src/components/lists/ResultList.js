import { useEffect, useState } from 'react'
import { useParams, withRouter } from "react-router-dom";

export default function ResultList() {

  const { urlsearchparam } = useParams()

  const usp = new URLSearchParams(urlsearchparam)

  console.log(usp.get("location"))
  
  for (const [key, value] of usp) {
    console.log(`${key} => ${value}`)
  }

  const { location } = usp.get("location")
  const { startDate } = usp.get("datefrom")
  const { endDate } = usp.get("dateto")
  const { guests } = usp.get("guests")
  
  const [hosting, setHosting] = useState(null);

  const fetchHosting = async () => {
    let res = await fetch(`/rest/hostings`);
    res = await res.json();
    setHosting(res);
    return res;
  };

  useEffect(() => {
    fetchHosting();
  }, []);

  
  console.log(hosting)


  // const { filteredList } =  hosting.filter((item) => usp.includes(item));
    

  
  return (
    <h2>TEST_ResultList</h2>
  );
  
}