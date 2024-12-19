import React, {
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';

import * as anchor from '@project-serum/anchor';
import * as token from '@solana/spl-token';
import { useWallet } from '@solana/wallet-adapter-react';
import {
  clusterApiUrl,
  LAMPORTS_PER_SOL,
} from '@solana/web3.js';

import {
  createStakingPool,
  createStakingState,
  fundStakingReward,
  getTokenFromType,
} from '../../contracts/web3';
import {
  createVestingPool,
  createVestingState,
  fundVestingReward,
} from '../../contracts/web3_vesting';
import Button from '../Button';
import TextField from '../TextField';

const PoolForm = ({ setIsCreate }) => {
    const SOON_HOST = clusterApiUrl("testnet");
    const connection = new anchor.web3.Connection(SOON_HOST);

    const wallet = useWallet();

    const [mintAddress, setMintAddress] = useState("");
    const [rewardStakingAmount, setRewardStakingAmount] = useState(0);
    const [rewardVestingAmount, setRewardVestingAmount] = useState(0);
    const [rewardPerSecond, setRewardPerSecond] = useState(0);
    const [rewardMaxAmount, setRewardMaxAmount] = useState(0);
    const [maxRewardPerSecond, setMaxRewardPerSecond] = useState(0);
    const [walletBalance, setWalletBalance] = useState(0);

    const tokenMint = useMemo(() => {
        return getTokenFromType("FRENS");
    }, ["FRENS"]);

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

    function onAddStakingPool() {
        try {
            let txHash = createStakingPool(wallet, tokenMint);
            console.log(txHash);
        } catch (e) {
            console.error(e);
        }
    }

    const onCreateStakingState = async () => {
        try {
            let txHash = await createStakingState(wallet, tokenMint);
            console.log(txHash);
        } catch (e) {
            console.error(e);
        }
    };

    const onDepositStakingReward = async () => {
        try {
            let txHash = await fundStakingReward(
                wallet,
                rewardStakingAmount,
                tokenMint
            );
            console.log(txHash);
        } catch (e) {
            console.error(e);
        }
    };

    function onAddVestingPool() {
        try {
            let txHash = createVestingPool(wallet, tokenMint);
            console.log(txHash);
        } catch (e) {
            console.error(e);
        }
    }

    const onCreateVestingState = async () => {
        try {
            let txHash = await createVestingState(wallet, tokenMint);
            console.log(txHash);
        } catch (e) {
            console.error(e);
        }
    };

    const onDepositVestingReward = async () => {
        try {
            let txHash = await fundVestingReward(
                wallet,
                rewardVestingAmount,
                tokenMint
            );
            console.log(txHash);
        } catch (e) {
            console.error(e);
        }
    };

    return (
        <div className="flex flex-col items-center w-full ">
            <div className="flex flex-row w-full gap-5 p-6">
                <div className="flex flex-col w-full gap-5">
                    <div className="h-11">
                        <Button
                            text="Create Staking State"
                            onClick={() => onCreateStakingState()}
                        />
                    </div>
                    <div className="h-11">
                        <Button
                            text="Add Staking Pool"
                            onClick={() => onAddStakingPool()}
                        />
                    </div>
                    <TextField
                        label="Reward Amount"
                        placeholder="0"
                        type="number"
                        id="reward-amount"
                        name="reward-amount"
                        onChange={(e) => setRewardStakingAmount(e.target.value)}
                    />
                    <div className="h-11">
                        <Button
                            text="Deposit Reward"
                            onClick={() => onDepositStakingReward()}
                        />
                    </div>
                </div>
                <div className="flex flex-col w-full gap-5">
                    <div className="h-11">
                        <Button
                            text="Create Vesting State"
                            onClick={() => onCreateVestingState()}
                        />
                    </div>
                    <div className="h-11">
                        <Button
                            text="Add Vesting Pool"
                            onClick={() => onAddVestingPool()}
                        />
                    </div>
                    <TextField
                        label="Reward Amount"
                        placeholder="0"
                        type="number"
                        id="reward-amount"
                        name="reward-amount"
                        onChange={(e) => setRewardVestingAmount(e.target.value)}
                    />
                    <div className="h-11">
                        <Button
                            text="Deposit Reward"
                            onClick={() => onDepositVestingReward()}
                        />
                    </div>
                </div>
            </div>
            <div className="w-full flex items-center justify-center dark:bg-[#342216] bg-[#AA6C39] p-4 gap-3 shadow-[0px_-5px_30px_rgba(212,_132,_67,_0.25)] ">
                <div className="w-1/2 h-11">
                    <Button
                        text="Back"
                        variant="outline"
                        onClick={() => setIsCreate(false)}
                    />
                </div>
            </div>
        </div>
    );
};

export default PoolForm;
