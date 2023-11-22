import { FC } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface IDatePickerProps {
  setStart: Function;
  start: Date;
}

const LbykDatePickerComponent: FC<IDatePickerProps> = ({ setStart, start }) => {
  return (
    <ReactDatePicker
      selected={start}
      minDate={new Date()}
      onChange={(date: Date) => setStart(date)}
      id="datepicker"
      className="datepicker-main"
      readOnly
      // dateFormat="dd MMMM"
    />
  );
};

export default LbykDatePickerComponent;
