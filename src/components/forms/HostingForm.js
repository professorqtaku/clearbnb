import { Form} from "reactstrap";
import { useContext, useState, useEffect } from "react";
import { useHistory } from 'react-router-dom'
import Radium from "radium";
import { AccommodationContext } from "../../contexts/AccommodationContextProvider";
import { AmenityContext } from "../../contexts/AmenityContextProvider";
import { UserContext } from "../../contexts/UserContextProvider";
import { HostingContext } from "../../contexts/HostingContextProvider";

import AddressFormGroup from "./AddressFormGroup";
import HostingInfoFormGroup from "./HostingInfoFormGroup";
import AmenityFormGroup from "./AmenityFormGroup";
import DatePickerFormGroup from "./DatePickerFormGroup";
import ErrorMessage from '../ErrorMessage'

function HostingForm(props) {
  const { toggleModal } = props
  const history = useHistory()

  const { accommodations } = useContext(AccommodationContext);
  const { amenities } = useContext(AmenityContext);
  const { user } = useContext(UserContext);
  const { addHosting } = useContext(HostingContext);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [totalDays, setTotalDays] = useState(0);
  const [isSaved, setIsSaved] = useState(true);

  useEffect(() => {
    countDays(startDate, endDate);
  }, [startDate, endDate])

  
  const submitHosting = async (e) => {
    e.preventDefault();
    let hosting = getInputValues();
    let newHostingId = await addHosting(hosting)
    if (newHostingId) {
      setIsSaved(true)
      toggleModal()
      history.push("/hosting/" + newHostingId)
    }
    else {
      setIsSaved(false)
    }

  };

  const getInputValues = () => {
    let hosting = {
      price: document.getElementById("hostingPriceInput").value,
      address: getAddress(),
      host: user,
      amenities: [],
      accommodation: accommodations.find(
        (accommodation) => (accommodation.description === document.getElementById("hostingAccommodationSelect").value)
      ),
      galleries: [document.getElementById("hostingGalleryInput").value],
      title: document.getElementById("hostingTitleInput").value,
      description: document.getElementById("hostingDescriptionInput").value,
      guestAmount: document.getElementById("hostingGuestAmountInput").value,
      bedAmount: document.getElementById("hostingBedAmountInput").value,
      bedroomAmount: document.getElementById("hostingBedroomAmountInput").value,
      availabilities: []
    };
    if (totalDays >= 1) {
      hosting.availabilities.push({
        timePeriod :[startDate.getTime(), endDate.getTime()]});
    }
    amenities.map((amenity) =>
      document.getElementById("hosting" + amenity.description + "Checkbox")
        .checked
        ? hosting.amenities.push(amenity)
        : null
    );
    return hosting;
  };

  const countDays = (start, end) => {
    let diff = end.getTime() - start.getTime();
    setTotalDays(Math.round(diff / 86400000));
  };

  const getAddress = () => {
    let address = {
      street: document.getElementById("hostingStreetInput").value,
      city: document.getElementById("hostingCityInput").value,
      county: document.getElementById("hostingCountyInput").value,
      zipCode: document.getElementById("hostingZipCodeInput").value,
      country: document.getElementById("hostingCountryInput").value,
    };
    return address
  }

  return (
    <div className="container mb-3" style={styles.container}>
      <Form onSubmit={submitHosting}>
        <HostingInfoFormGroup accommodations={accommodations} />
        <AddressFormGroup />
        <DatePickerFormGroup
          startDate={startDate}
          setStartDate={setStartDate}
          endDate={endDate}
          setEndDate={setEndDate}
        />
        <AmenityFormGroup amenities={amenities} />
        <div className="mb-5 mt-5" style={styles.buttonContainer}>
          <ErrorMessage showMessage={!isSaved} message="Hosting save failed, please try again"/>
          <button
            className="btn align-self-center"
            type="submit"
            style={styles.button}
          >
            Post a hosting
          </button>
        </div>
      </Form>
    </div>
  );
}

export default Radium(HostingForm);

const styles = {
  container: {
    backgroundColor: "var(--lightgrey)",
    padding: "2vw",
    borderRadius: "10px",
  },
  button: {
    backgroundColor: "var(--pink)",
    color: "white",
    fontWeight: "bold",
    width: "100%",
    height: "100%",
    borderRadius: "50px",
    ":focus": {
      border: "none !important",
      boxShadow: "none !important",
    },
  },
  buttonContainer: {
    width: "80%",
    maxWidth: "400px",
    height: "10vh",
    maxHeight: "60px",
    textAlign: "center",
    margin: "0 auto",
  },
};
