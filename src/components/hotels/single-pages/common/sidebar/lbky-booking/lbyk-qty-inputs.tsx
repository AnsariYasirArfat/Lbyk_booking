import { FC, useState } from "react";
interface ActivityQuantityInputProps {
  label?: string;
  limit?: number;
  initial?: number;
  quantity: number;
  onQuantityChange: (newQuantity: number) => void;
}
const LbykQuantityInput: FC<ActivityQuantityInputProps> = ({
  label,
  initial,
  limit,
  quantity,
  onQuantityChange,
}) => {
  const handleMinusClick = () => {
    if (initial) {
      if (quantity > initial) {
        onQuantityChange(quantity - 1);
      }
    } else {
      if (quantity > 0) onQuantityChange(quantity - 1);
    }
  };

  const handlePlusClick = () => {
    if (limit) {
      if (quantity < limit) {
        onQuantityChange(quantity + 1);
      }
    } else onQuantityChange(quantity + 1);
  };
  const isPlusButtonDisabled = limit !== undefined && quantity >= limit;
  return (
    <div className="input-group row justify-content-around align-items-center">
      <label className="col-8  justify-content-start fw-bolder m-0">
        <span className="">{label}:</span> <span className="">{quantity} </span>
      </label>
      {/* <input
        type="text"
        name="quantity"
        className="form-control input-number qty-input fw-bolder border-0"
        value={quantity}
        tabIndex={0}
        readOnly
      /> */}

      <div
        className="col-4 btn-group btn-group-sm"
        role="group"
        aria-label="First group"
      >
        <button
          type="button"
          className="btn btn-solid rounded-start "
          onClick={handleMinusClick}
          data-type="minus"
          data-field=""
          tabIndex={0}
          style={{
            fontSize: "11px",
            padding: "0px 4px ",
            margin: "0px",
          }}
        >
          <i className="fa fa-minus " aria-hidden="true"></i>
        </button>
        <button
          type="button"
          className="btn btn-solid rounded-end "
          onClick={handlePlusClick}
          data-type="plus"
          data-field=""
          tabIndex={0}
          disabled={isPlusButtonDisabled}
          style={{
            fontSize: "11px",
            padding: "0px 4px ",
            margin: "0px",
          }}
        >
          <i className="fa fa-plus " aria-hidden="true"></i>
        </button>
      </div>
    </div>
  );
};

export default LbykQuantityInput;
