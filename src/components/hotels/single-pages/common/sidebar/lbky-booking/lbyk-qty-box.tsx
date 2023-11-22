"use client";

import { useEffect, useState } from "react";
import LbykQuantityInput from "./lbyk-qty-inputs";

const LbykQtyBox: React.FC = ({
  guest,
  setGuest,
}: {
  guest?: any;
  setGuest?: any;
}) => {
  useEffect(() => {
    console.log(guest);
  }, []);
  const adultsQuantityChange = (newQuantity: number) => {
    setGuest({ ...guest, adults: newQuantity });
  };
  const childrenQuantityChange = (newQuantity: number) => {
    setGuest({ ...guest, child: newQuantity });
  };

  return (
    <>
      <div className="room-cls">
        <div className="qty-box p-1">
          <LbykQuantityInput
            label={"Adults"}
            initial={1}
            limit={8}
            quantity={guest.adults}
            onQuantityChange={adultsQuantityChange}
          />
        </div>
        <div className="qty-box  py-2">
          <LbykQuantityInput
            label={"Child"}
            limit={4}
            quantity={guest.child}
            onQuantityChange={childrenQuantityChange}
          />
        </div>
      </div>
    </>
  );
};

export default LbykQtyBox;
