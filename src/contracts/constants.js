import { PublicKey } from "@solana/web3.js";

export const GLOBAL_STATE_SEED = "state";

export const PROGRAM_ID = new PublicKey(
  "ChiXGEJaaLRkTx3wipqzxTHgSCiYkfzUVy2FqhC9fmeh"
);
export const PRESALE_PROGRAM_ID = new PublicKey(
  "xhhcC3DTaLem69hLjw1qt136FFboNQDx34bVe83JDkM"
);
export const ADMINWALLET = new PublicKey(
  "BCUitLaS7hE4PtHpLTMwGu6H7srMvieucEcwS4aVCoBG"
);

export const FRENS = new PublicKey(
  "HfjcaeUcHWAvXQMeu3siSz2BL93u1LEvCTNRzHqxFrSx"
);
export const TREASURY = new PublicKey(
  "ApwN3sqWr281oB92mNfXdSJHRPNuR3hwEUDJXXp5HDzD"
); //referal
export const pFRENS = new PublicKey(
  "HfjcaeUcHWAvXQMeu3siSz2BL93u1LEvCTNRzHqxFrSx"
);

// minimum amount to deposit
export const PRESALE_MINIMUM_AMOUNT = 0.1; //(sol)
// maximum amount to deposit
export const PRESALE_MAXIMUM_AMOUNT = 20; //(sol)
export const FRENS_DECIMALS = 9;
export const PRICE_PER_TOKEN = 0.0002; //(sol)
export const PRESALE_SEED = "CLUB_PRESALE_SEED";
export const USER_SEED = "CLUB_USER_SEED";
export const PRESALE_ID = 1;
export const TOKEN_PRESALE_AMOUNT = 21000000;
export const PRESALE_AUTHORITY = new PublicKey(
  "5899FdUxa1oEJZ79uJzpvbPrvv9hp7wDtx5qMmA8dmiu"
);
