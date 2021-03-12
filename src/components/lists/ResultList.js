import { HostingContext } from '../../contexts/HostingContextProvider'
import { useEffect, useState, useContext } from 'react'
import { useParams, withRouter } from "react-router-dom";


export default function ResultList() {

  const { hostings } = useContext(HostingContext)

  useEffect(() => {
    console.log("hostings: ", hostings
    )
  }, [hostings]);

  const renderResults = (hostings) => {

    const search = JSON.parse(localStorage.getItem("search"))
    console.log("getsearch: ", search)
    console.log("location: ", search[0].location)
    const list = hostings.filter((hosting) => hosting.address.city.includes("Malmö"));
    console.log("list before removing duplicates: ", list.length)

    return (
      <div>
        <h1>yes</h1>
      </div>
    )
  }
  const loading = (
    <div>
      Loading
    </div>
  );
  return <div className="container">{hostings ? renderResults(hostings) : loading}</div>;
}