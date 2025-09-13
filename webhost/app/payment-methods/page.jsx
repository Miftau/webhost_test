import React from "react";
import HeroSectionNormal from "../components/HeroSectionNormal/HeroSectionNormal";
import BankTransfer from "../components/PaymentMethods/BankTransfer";
import ElectronicWallets from "../components/PaymentMethods/ElectronicWallets";
import OnlinePayment from "../components/PaymentMethods/OnlinePayment";
import DigitalCurrencies from "../components/PaymentMethods/DigitalCurrencies";
import Asks from "../components/DataCenter/Asks/Asks";
import TraditionalMethods from "../components/PaymentMethods/TraditionalMethods";

const PaymentMethods = () => {
  return (
    <div className="overflow-x-hidden">
      <HeroSectionNormal
        title="طرق الدفع"
        description="ادفع بالطريقة التي تناسبك واستمتع بتجربة دفع سهلة وسلسة" 
        secondaryButtonText="أبدأالآن"
        imageBottom="/images/payment-m.svg"
        imageAltBottom="Hero Background"
      />
      <BankTransfer />
      <ElectronicWallets />
      <OnlinePayment />
      <DigitalCurrencies />
      <TraditionalMethods />
      <Asks />
    </div>
  );
};

export default PaymentMethods;
