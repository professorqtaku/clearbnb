import { forwardRef } from "react";

const DatePickerCustomInput = forwardRef(({ value, onClick }, ref) => (
  <input className="form-control" onClick={onClick} ref={ref} value={value} />
));

export default DatePickerCustomInput;
