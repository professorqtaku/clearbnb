import { forwardRef } from "react";

const DatePickerCustomInput = forwardRef(({ onChange, value, onClick }, ref) => (
  <input style={{ borderStyle: "none" }} className="form-control" onChange={onChange} onClick={onClick} ref={ref} value={value} />
));

export default DatePickerCustomInput;
