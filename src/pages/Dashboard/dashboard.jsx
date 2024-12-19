import { useState, useEffect, useMemo } from "react";
import { getTotalStaked, getTotalSuplyToken } from "../../contracts/web3";
import { getTokenFromType } from "../../contracts/web3";
import StatItem from "../../components/StatItem";
import DashboardProgress from "../../components/Dashboard/DashboardProgress";
import DashboardReward from "../../components/Dashboard/DashboardReward";
import VestingSchedule from "../../components/VestingSchedule";
import DashboardChart from "../../components/Dashboard/DashboardChart";
import TabItem from "../../components/StakingPool/TabItem";
import { useWallet } from "@solana/wallet-adapter-react";

import { getMyStakedAndReward } from "../../contracts/web3";

const Mainboard = () => {
  const [totalStaked, setTotalStaked] = useState(0);
  const [totalSupplied, setTotalSupplied] = useState(0);
  const [totalReward, setTotalReward] = useState(0);

  const wallet = useWallet();

  const heading = "FRENS";
  const tokenMint = useMemo(() => {
    return getTokenFromType(heading);
  }, [heading]);

  const getReward = async () => {
    const [amount, reward_amount] = await getMyStakedAndReward(
      wallet,
      tokenMint
    );
    setTotalReward(reward_amount);
  };

  useEffect(() => {
    setTimeout(() => {
      getReward();
    }, 1000);
  });

  useEffect(() => {
    (async () => {
      const stake_amount = await getTotalStaked(tokenMint);
      const supply_amount = await getTotalSuplyToken(tokenMint);
      console.log("info.value.uiAmount", supply_amount);
      setTotalStaked(stake_amount);
      setTotalSupplied(supply_amount);
    })();
  }, [tokenMint]);

  return (
    <div className="h-full flex flex-col  items-center">
      <div className="flex flex-col w-11/12 gap-4 ">
        {/* <div className="max-w-7xl mx-auto px-4 flex justify-center items-center"> */}
        <div className="flex flex-row items-center justify-start dark:text-white text-title-light gap-4">
          {/* <img
            className="w-14 hidden dark:flex"
            alt=""
            src="/icons/logo1.svg"
          /> */}
          <img
            className="w-14 dark:hidden flex"
            alt=""
            src="/icons/logo1-light.svg"
          />
          <h1 className="text-2xl font-semibold">Dashboard Overview</h1>
        </div>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 text-white">
          <StatItem
            iconDark="/icons/staking.svg"
            iconLight="/icons/staking-light.svg"
            value={`${totalStaked}tokens`}
            title="Total Staked"
          />

          <StatItem
            iconDark="/icons/apr.svg"
            iconLight="/icons/apr-light.svg"
            value={`150%`}
            title="Average APY"
          />

          <StatItem
            iconDark="/icons/earning.svg"
            iconLight="/icons/earning-light.svg"
            value={`${totalReward} tokens`}
            title="Total Earnings"
          />

          {/* <StatItem
            iconDark="/icons/total-duration-square.svg"
            iconLight="/icons/total-duration-square-light.svg"
            value={`${totalStaked}%`}
            title="Total Duration"
            info="/icons/info.svg"
          /> */}
        </div>
        <div className="h-full lg:grid lg:grid-cols-4 gap-3 ">
          <div className="h-full lg:col-span-3 flex flex-col gap-3">
            {/* <div className="rounded-xl dark:bg-lightBrown bg-white shadow-custom">
              <DashboardProgress />
            </div> */}
            <div className="w-full lg:hidden flex">
              <VestingSchedule />
            </div>
            <div className="w-full grid lg:grid-cols-1 gap-3">
              <iframe
                width="100%"
                className="size-full min-h-[400px] md:min-h-[600px] object-cover"
                src="https://birdeye.so/tv-widget/8EVMvrgjWXH7RnTyWSBqejk7zEKArmXrVV4qeamRLhtQ?chain=solana&chartType=bar&chartInterval=3&chartLeftToolbar=show"
                // allowfullscreen={true}
              ></iframe>
            </div>
          </div>
          <div className="w-full hidden lg:block">
            <VestingSchedule />
          </div>

          <div className=" bg-lightBrown"></div>
        </div>
        {/* <div className="">
                    <div className="flex flex-row ">
                        <div className="m-2 col-span-1 bg-[#111422]  w-72 h-24 rounded-2xl  justify-items-center">
                            <div className="dashboard-card flex-col grid justify-items-center">
                                <p className="card-title my-4  font-bold text-white font-serif text-[#97989f]">SYNC Price</p>
                                <p className="card-value font-bold text-white font-serif">$100</p>
                            </div>
                        </div>

                        <div className="m-2 col-span-1 bg-[#111422]  w-72 h-24 grid rounded-2xl justify-items-center">
                            <div className="dashboard-card flex-col grid justify-items-center">
                                <p className="card-title my-4 font-bold text-white font-serif text-[#97989f]">Market Cap</p>
                                <p className="card-value font-bold text-white font-serif">${totalSupplied * 100}</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row">
                        <div className="m-2 col-span-1 bg-[#111422]  w-72 h-24 rounded-2xl  justify-items-center">
                            <div className="dashboard-card flex-col grid justify-items-center">
                                <p className="card-title my-4  font-bold text-white font-serif text-[#97989f]">Satked SYNC</p>
                                <p className="card-value  font-bold text-white font-serif">${totalStaked * 100}</p>
                            </div>
                        </div>

                        <div className="m-2 col-span-1 bg-[#111422]  w-72 h-24 rounded-2xl  justify-items-center">
                            <div className="dashboard-card flex-col grid justify-items-center">
                                <p className="card-title  my-4 font-bold text-white font-serif text-[#97989f]">APY</p>
                                <p className="card-value  font-bold text-white font-serif">150%</p>
                            </div>
                        </div>
                    </div>
                </div> */}
        {/* </div> */}
      </div>
    </div>
  );
};

export default Mainboard;
