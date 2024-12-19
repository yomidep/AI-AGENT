import React, { useCallback, useEffect, useMemo, useState } from "react";

import { useSearchParams } from "react-router-dom";

import * as anchor from "@project-serum/anchor";
import * as token from "@solana/spl-token";
import { useWallet } from "@solana/wallet-adapter-react";
import { clusterApiUrl, LAMPORTS_PER_SOL } from "@solana/web3.js";

import {
  claim_staking,
  getMyStakedAndReward,
  getTokenFromType,
  stake,
  unstake,
} from "../../contracts/web3";
import Button from "../Button";
import StatItem from "../StatItem";
import PlusMinusButton from "./PlusMinusButton";
import StakingSummaryItem from "./StakingSummaryItem";

const TokenStakingSection = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [totalStaking, setTotalStaking] = useState(250000);
  const [stakeAmount, setStakeAmount] = useState(0);
  const [stakedAmount, setStakedAmount] = useState(0);
  const [totalStaked, setTotalStaked] = useState(0);
  const [setimatedAward, setEstimatedAward] = useState(150);
  const [price, setPrice] = useState(0.0988);
  const [unStakeAmount, setUnStakeAmount] = useState(0);
  const [rewards, setRewards] = useState(0);
  const [walletBalance, setWalletBalance] = useState(0);

  const SOON_HOST = clusterApiUrl("testnet");
  const connection = new anchor.web3.Connection(SOON_HOST);

  const wallet = useWallet();

  const tokenMint = useMemo(() => {
    return getTokenFromType("FRENS");
  }, ["FRENS"]);

  const getReward = async () => {
    const [amount, reward_amount] = await getMyStakedAndReward(
      wallet,
      tokenMint
    );
    setStakedAmount(amount);
    setRewards(reward_amount);
  };

  useEffect(() => {
    setTimeout(() => {
      getReward();
    }, 1000);
  });

  useEffect(() => {
    getReward();
  }, [wallet]);

  const fetchBalance = useCallback(async () => {
    try {
      const balance1 = await connection.getBalance(wallet.publicKey);
      // setWalletBalance(balance1 / LAMPORTS_PER_SOL);
      const mint = tokenMint;

      const userAta = await token.getOrCreateAssociatedTokenAccount(
        connection,
        wallet,
        mint,
        wallet.publicKey,
        false
      );
      // setTokenAccount(userAta.address.toBase58());
      const userAta_balance = parseInt(userAta.amount) / LAMPORTS_PER_SOL;
      setWalletBalance(userAta_balance);
    } catch (error) {
      // Handle errors appropriately
      console.error("Error fetching balance:", error);
    }
  }, [connection, wallet]);

  useEffect(() => {
    // connectWallet();
    fetchBalance();
  }, [connection, wallet]);

  const onStake = async () => {
    let referral = getRef();
    if (referral === null) referral = wallet.publicKey.toString();
    // alert("referral: ", referral);
    try {
      let txHash = await stake(wallet, stakeAmount, tokenMint, referral);
      console.log("txHash:", txHash);
      // setDataUpdate(!dataUpdate)
    } catch (e) {
      console.error(e);
    }
  };

  const onUnstake = async () => {
    let referral = getRef();
    if (referral === null) referral = wallet.publicKey.toString();
    try {
      // setDataUpdate(!dataUpdate)
      await unstake(wallet, unStakeAmount, tokenMint, referral);
    } catch (e) {
      console.error(e);
    }
  };

  const onClaim = async () => {
    try {
      await claim_staking(wallet, tokenMint);
      setDataUpdate(!dataUpdate);
    } catch (e) {
      console.error(e);
    }
  };

  const getRef = () => {
    const ref = searchParams.get("ref");
    // query.get("ref");
    return ref;
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
      <div className="w-full flex flex-col gap-3 dark:bg-lightBrown bg-white shadow-custom rounded-xl p-4 dark:text-white text-title-light ">
        <div className="flex flex-row items-center justify-start my-6 dark:text-white text-title-light gap-4">
          <img
            className="w-14 hidden dark:flex"
            alt=""
            src="/icons/logo1.svg"
          />
          <img
            className="w-14 dark:hidden flex"
            alt=""
            src="/icons/logo1-light.svg"
          />
          <h1 className="text-2xl font-semibold">POTORD Staking</h1>
        </div>
        <div className="flex justify-between">
          <div className="w-2/5 flex flex-col gap-6 ">
            <p>Available In Wallet</p>
            <div className="flex flex-row justify-between">
              <p>{walletBalance}</p>
              <button
                onClick={() => setStakeAmount(walletBalance)}
                className="underline text-[#FB9037]"
              >
                Max
              </button>
            </div>

            <div className="flex flex-row justify-between items-center gap-x-1">
              <PlusMinusButton
                value="-"
                onClick={() => setStakeAmount((prev) => Math.max(prev - 1, 0))}
              />

              <input
                type="number"
                value={stakeAmount}
                min={0}
                onChange={(e) => setStakeAmount(parseInt(e.target.value))}
                className="w-24 grow h-12 text-center bg-transparent rounded border-2 border-[#9D8B70]"
              />
              <PlusMinusButton
                value="+"
                onClick={() =>
                  setStakeAmount((stakeAmount) =>
                    Math.min(stakeAmount + 1, totalStaking)
                  )
                }
              />
            </div>
            <div className="h-11">
              <Button text="Stake" onClick={onStake} />
            </div>
          </div>

          <div className="w-2/5 flex flex-col gap-6 ">
            <p>Total Staked</p>
            <div className="flex flex-row justify-between">
              <p>{stakedAmount}</p>
              <button
                onClick={() => setUnStakeAmount(stakedAmount)}
                className="underline text-[#FB9037]"
              >
                Max
              </button>
            </div>
            <div className="flex flex-row justify-between  items-center gap-x-1 w-full ">
              <PlusMinusButton
                value="-"
                onClick={() =>
                  setUnStakeAmount((prev) => Math.max(prev - 1, 0))
                }
              />
              <input
                type="number"
                value={unStakeAmount}
                max={stakedAmount}
                min={0}
                onChange={(e) => setUnStakeAmount(parseInt(e.target.value))}
                className="w-24 grow h-12 text-center bg-transparent rounded border-2 border-[#9D8B70]"
              />
              <PlusMinusButton
                value="+"
                onClick={() =>
                  setUnStakeAmount((prev) => Math.min(prev + 1, stakedAmount))
                }
              />
            </div>
            <div className="h-11">
              <Button
                text="Unstake"
                disabled={stakedAmount > 0 ? false : true}
                onClick={onUnstake}
              />
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center ">
          <p>Pending Rewards: {rewards}</p>
          <div className="w-24 h-11">
            <Button
              text="Claim"
              iconSrc="/icons/download.svg"
              className="px-10"
              onClick={onClaim}
            />
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col gap-3">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-3">
          <div className="w-full ">
            <StatItem
              value={`${totalStaking} #Potord`}
              title="Total Staking"
              info="/icons/info.svg"
            />
          </div>
          <div className="w-full">
            <StatItem
              value={`${setimatedAward}% ARP`}
              title="Estimated Award"
              info="/icons/info.svg"
            />
          </div>
        </div>
        <div className="w-full h-full flex flex-col gap-3 dark:bg-lightBrown bg-white shadow-custom rounded-xl p-6 ">
          <h2 className="font-semibold pb-6 dark:text-white text-title-light">
            Staking Summary
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
            <StakingSummaryItem title="POTORD Price" value={`$${price}`} />
            <StakingSummaryItem
              title="Daily Rewards"
              value={`$${price}`}
              info={true}
            />
            <StakingSummaryItem
              title="Total Supply"
              value={`$${price}`}
              info={true}
            />
            {/* <StakingSummaryItem title="Interest Period" value={`$${price}`} />
            <StakingSummaryItem title="Stake Start Date" value={`$${price}`} />
            <StakingSummaryItem title="Stake End Date" value={`$${price}`} /> */}
          </div>

          {/* <div className="flex justify-end items-center ">
            <div className="w-24 h-11">
              <Button text="Audit" iconSrc="/icons/download.svg" />
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default TokenStakingSection;
