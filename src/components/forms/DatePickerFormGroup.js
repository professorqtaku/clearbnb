import { Label } from "reactstrap";
import DatePicker from "react-datepicker";
import DatePickerCustomInput from "../DatePickerCustomInput";

export default function DatePickerFormGroup(props) {
  const { startDate, setStartDate, endDate, setEndDate } = props;

  const changeStartDate = (date) => {
    setStartDate(date);
    if (date >= endDate) {
      setEndDate(date);
    }
  };
  
  return (
    <div className="row mb-5">
      <h4>Available dates</h4>
      <div className="form-group col-12 col-md-6" style={styles.formGroup}>
        <Label for="date">From</Label>
        <DatePicker
          selectsStart
          selected={startDate}
          onChange={(date) => {
            changeStartDate(date);
          }}
          dateFormat="yyyy-MM-dd"
          minDate={new Date()}
          customInput={<DatePickerCustomInput />}
        />
      </div>
      <div className="form-group col-12 col-md-6" style={styles.formGroup}>
        <Label for="date">To</Label>
        <DatePicker
          selectsEnd
          selected={endDate}
          onChange={(date) => setEndDate(date)}
          dateFormat="yyyy-MM-dd"
          startDate={new Date()}
          minDate={startDate}
          customInput={<DatePickerCustomInput />}
        />
      </div>
      <div className="form-text">You can add more dates later</div>
    </div>
  );
}

const styles = {
  input: {},
  container: {
    backgroundColor: "var(--lightgrey)",
    maxWidth: "600px",
    padding: "2vw",
    borderRadius: "5px",
  },
  button: {
    backgroundColor: "var(--pink)",
    textAlign: "center",
    color: "white",
    width: "100%",
    fontWeight: "bold",
    borderRadius: "50px",
    ":focus": {
      border: "none !important",
    },
  },
  center: {
    margin: "0 auto",
  },
  formGroup: {
    paddingTop: "10px",
  },
};
