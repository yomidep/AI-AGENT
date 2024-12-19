import React, { useState } from "react";
import EmptyStakingPool from "../../components/StakingPool/EmptyStakingPool";
import StakingPools from "../../components/StakingPool/StakingPools";
import Form from "../../components/StakingPool/Form";

export const Poolcreation = () => {
  const stakingPools = [
    {
      id: 0,
      type: "Potord Pool",
      name: "#Potord / #Potord",
      apy: "10",
      lock: "30",
    },
    {
      id: 1,
      type: "Potord Pool",
      name: "#Potord / #Potord",
      apy: "10",
      lock: "30",
    },
    {
      id: 2,
      type: "Potord Pool",
      name: "Potord / Potord",
      apy: "10",
      lock: "30",
    },
    {
      id: 3,
      type: "Potord Pool",
      name: "Potord / Potord",
      apy: "10",
      lock: "30",
    },
  ];
  const [isCreate, setIsCreate] = useState(false);

  return (
    <div className="relative h-full flex flex-col  items-center">
      <img
        className="absolute bottom-0 left-0 -right-40 min-h-[40%] "
        src="/images/pools-bg.svg"
        alt="pools bg"
      />
      <div className="w-11/12 px-4 flex justify-center items-center z-30 ">
        {isCreate ? (
          <Form setIsCreate={setIsCreate} />
        ) : (
          <>
            {stakingPools.length > 0 ? (
              <StakingPools
                stakingPools={stakingPools}
                setIsCreate={setIsCreate}
              />
            ) : (
              <EmptyStakingPool setIsCreate={setIsCreate} />
            )}
          </>
        )}
      </div>
      {/* <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-wavy-bottom"></div> */}
    </div>
  );
};

export default Poolcreation;
