import React, { useState } from "react";

import NFTStaking from "./NFTStakingPool";
import PoolForm from "./PoolForm";
import TabItem from "./TabItem";

const Form = ({ setIsCreate }) => {
  const [tabSelection, setTabSelection] = useState(
    "tokenStakingAndVestingPool"
  );

  return (
    <div className="w-1/2 flex flex-col gap-4 rounded-xl dark:bg-lightBrown bg-[#FFE5CF]  border-[0.5px] border-solid border-[#80573D] text-white overflow-x-hidden">
      <div className=" h-12 flex items-center justify-center mx-6 mt-6 rounded-lg p-1 dark:bg-[#563926] bg-[#D68C50]">
        <TabItem
          name="Token Staking and Vesting Pool Setup"
          value="tokenStakingAndVestingPool"
          selectedForm={tabSelection}
          setSelectedForm={setTabSelection}
        />
        <TabItem
          name="NFT Staking and Vesting Pool Setup"
          value="NFTStakingAndVestingPool"
          selectedForm={tabSelection}
          setSelectedForm={setTabSelection}
        />
      </div>
      <TabItem
        name="Reward Distribution"
        value="reward"
        // selectedForm={selectedForm}
        // setSelectedForm={setSelectedForm}
      />
      {tabSelection === "tokenStakingAndVestingPool" && (
        <PoolForm setIsCreate={setIsCreate} />
      )}
      {tabSelection === "NFTStakingAndVestingPool" && (
        <NFTStaking setIsCreate={setIsCreate} />
      )}
    </div>
  );
};

export default Form;
