import React from "react";
import {Button} from "@nextui-org/react";

const DonateButton = () => {
  return (
    <div className="flex flex-col gap-4 items-center">
      <Button size="lg" className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg">
        MasterCard
      </Button>    
      <Button size="lg" className="bg-gradient-to-tr from-blue-700 to-white text-white shadow-lg" variant="bordered" >
       PayPal
      </Button>
    </div>
  );
}

export default DonateButton;
