export type SolanaSpltokenVesting = {
  version: "0.1.0";
  name: "solana_spltoken_vesting";
  instructions: [
    {
      name: "createState";
      accounts: [
        {
          name: "authority";
          isMut: true;
          isSigner: true;
        },
        {
          name: "state";
          isMut: true;
          isSigner: false;
        },
        {
          name: "rewardVault";
          isMut: true;
          isSigner: false;
        },
        {
          name: "rewardMint";
          isMut: false;
          isSigner: false;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "tokenProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "associatedTokenProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "clock";
          isMut: false;
          isSigner: false;
        },
        {
          name: "rent";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "tokenPerSecond";
          type: "u64";
        }
      ];
    },
    {
      name: "createPool";
      accounts: [
        {
          name: "pool";
          isMut: true;
          isSigner: false;
        },
        {
          name: "state";
          isMut: true;
          isSigner: false;
        },
        {
          name: "mint";
          isMut: false;
          isSigner: false;
        },
        {
          name: "vault";
          isMut: true;
          isSigner: false;
        },
        {
          name: "authority";
          isMut: true;
          isSigner: true;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "tokenProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "associatedTokenProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "clock";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "point";
          type: "u64";
        },
        {
          name: "amountMultipler";
          type: "u64";
        }
      ];
    },
    {
      name: "fundRewardToken";
      accounts: [
        {
          name: "state";
          isMut: true;
          isSigner: false;
        },
        {
          name: "authority";
          isMut: true;
          isSigner: true;
        },
        {
          name: "rewardVault";
          isMut: true;
          isSigner: false;
        },
        {
          name: "userVault";
          isMut: true;
          isSigner: false;
        },
        {
          name: "tokenProgram";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "amount";
          type: "u64";
        }
      ];
    },
    {
      name: "createUser";
      accounts: [
        {
          name: "user";
          isMut: true;
          isSigner: false;
        },
        {
          name: "state";
          isMut: true;
          isSigner: false;
        },
        {
          name: "pool";
          isMut: true;
          isSigner: false;
        },
        {
          name: "authority";
          isMut: true;
          isSigner: true;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "tokenProgram";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [];
    },
    {
      name: "vest";
      accounts: [
        {
          name: "user";
          isMut: true;
          isSigner: false;
        },
        {
          name: "state";
          isMut: true;
          isSigner: false;
        },
        {
          name: "pool";
          isMut: true;
          isSigner: false;
        },
        {
          name: "authority";
          isMut: true;
          isSigner: true;
        },
        {
          name: "mint";
          isMut: false;
          isSigner: false;
        },
        {
          name: "poolVault";
          isMut: true;
          isSigner: false;
        },
        {
          name: "userVault";
          isMut: true;
          isSigner: false;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "tokenProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "clock";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "amount";
          type: "u64";
        }
      ];
    },
    {
      name: "unvest";
      accounts: [
        {
          name: "user";
          isMut: true;
          isSigner: false;
        },
        {
          name: "state";
          isMut: true;
          isSigner: false;
        },
        {
          name: "pool";
          isMut: true;
          isSigner: false;
        },
        {
          name: "authority";
          isMut: true;
          isSigner: true;
        },
        {
          name: "mint";
          isMut: false;
          isSigner: false;
        },
        {
          name: "poolVault";
          isMut: true;
          isSigner: false;
        },
        {
          name: "userVault";
          isMut: true;
          isSigner: false;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "tokenProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "clock";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "amount";
          type: "u64";
        }
      ];
    },
    {
      name: "harvest";
      accounts: [
        {
          name: "user";
          isMut: true;
          isSigner: false;
        },
        {
          name: "state";
          isMut: true;
          isSigner: false;
        },
        {
          name: "pool";
          isMut: true;
          isSigner: false;
        },
        {
          name: "authority";
          isMut: true;
          isSigner: true;
        },
        {
          name: "mint";
          isMut: false;
          isSigner: false;
        },
        {
          name: "rewardVault";
          isMut: true;
          isSigner: false;
        },
        {
          name: "userVault";
          isMut: true;
          isSigner: false;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "tokenProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "clock";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [];
    }
  ];
  accounts: [
    {
      name: "StateAccount";
      type: {
        kind: "struct";
        fields: [
          {
            name: "authority";
            type: "publicKey";
          },
          {
            name: "rewardMint";
            type: "publicKey";
          },
          {
            name: "rewardVault";
            type: "publicKey";
          },
          {
            name: "bump";
            type: "u8";
          },
          {
            name: "totalPoint";
            type: "u64";
          },
          {
            name: "startTime";
            type: "i64";
          },
          {
            name: "tokenPerSecond";
            type: "u64";
          }
        ];
      };
    },
    {
      name: "FarmPoolAccount";
      type: {
        kind: "struct";
        fields: [
          {
            name: "bump";
            type: "u8";
          },
          {
            name: "authority";
            type: "publicKey";
          },
          {
            name: "amount";
            type: "u64";
          },
          {
            name: "mint";
            type: "publicKey";
          },
          {
            name: "vault";
            type: "publicKey";
          },
          {
            name: "point";
            type: "u64";
          },
          {
            name: "lastRewardTime";
            type: "i64";
          },
          {
            name: "accRewardPerShare";
            type: "u128";
          },
          {
            name: "amountMultipler";
            type: "u64";
          },
          {
            name: "totalUser";
            type: "u64";
          }
        ];
      };
    },
    {
      name: "FarmPoolUserAccount";
      type: {
        kind: "struct";
        fields: [
          {
            name: "bump";
            type: "u8";
          },
          {
            name: "pool";
            type: "publicKey";
          },
          {
            name: "authority";
            type: "publicKey";
          },
          {
            name: "amount";
            type: "u64";
          },
          {
            name: "rewardAmount";
            type: "u128";
          },
          {
            name: "extraReward";
            type: "u128";
          },
          {
            name: "rewardDebt";
            type: "u128";
          },
          {
            name: "lastVestTime";
            type: "i64";
          },
          {
            name: "lockDuration";
            type: "i64";
          },
          {
            name: "reserved1";
            type: "u128";
          },
          {
            name: "reserved2";
            type: "u128";
          },
          {
            name: "reserved3";
            type: "u128";
          }
        ];
      };
    }
  ];
  events: [
    {
      name: "PoolCreated";
      fields: [
        {
          name: "pool";
          type: "publicKey";
          index: false;
        },
        {
          name: "mint";
          type: "publicKey";
          index: false;
        }
      ];
    },
    {
      name: "UserCreated";
      fields: [
        {
          name: "pool";
          type: "publicKey";
          index: false;
        },
        {
          name: "user";
          type: "publicKey";
          index: false;
        },
        {
          name: "authority";
          type: "publicKey";
          index: false;
        }
      ];
    },
    {
      name: "UserVested";
      fields: [
        {
          name: "pool";
          type: "publicKey";
          index: false;
        },
        {
          name: "user";
          type: "publicKey";
          index: false;
        },
        {
          name: "authority";
          type: "publicKey";
          index: false;
        },
        {
          name: "amount";
          type: "u64";
          index: false;
        }
      ];
    },
    {
      name: "UserUnvested";
      fields: [
        {
          name: "pool";
          type: "publicKey";
          index: false;
        },
        {
          name: "user";
          type: "publicKey";
          index: false;
        },
        {
          name: "authority";
          type: "publicKey";
          index: false;
        },
        {
          name: "amount";
          type: "u64";
          index: false;
        }
      ];
    },
    {
      name: "UserHarvested";
      fields: [
        {
          name: "pool";
          type: "publicKey";
          index: false;
        },
        {
          name: "user";
          type: "publicKey";
          index: false;
        },
        {
          name: "authority";
          type: "publicKey";
          index: false;
        },
        {
          name: "amount";
          type: "u64";
          index: false;
        }
      ];
    }
  ];
  errors: [
    {
      code: 6000;
      name: "UnvestOverAmount";
      msg: "Over vested amount";
    },
    {
      code: 6001;
      name: "UnderLocked";
      msg: "Under locked";
    },
    {
      code: 6002;
      name: "WorkingPool";
      msg: "Pool is working";
    },
    {
      code: 6003;
      name: "InvalidLockDuration";
      msg: "Invalid Lock Duration";
    },
    {
      code: 6004;
      name: "InvalidSEQ";
      msg: "Invalid SEQ";
    }
  ];
  metadata: {
    address: "HeugMFXgTbH1ndEMi3fPsJKSe9qPFDf7swQAGGqpspUn";
  };
};

export const VESTING_IDL: SolanaSpltokenVesting = {
  version: "0.1.0",
  name: "solana_spltoken_vesting",
  instructions: [
    {
      name: "createState",
      accounts: [
        {
          name: "authority",
          isMut: true,
          isSigner: true,
        },
        {
          name: "state",
          isMut: true,
          isSigner: false,
        },
        {
          name: "rewardVault",
          isMut: true,
          isSigner: false,
        },
        {
          name: "rewardMint",
          isMut: false,
          isSigner: false,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "tokenProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "associatedTokenProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "clock",
          isMut: false,
          isSigner: false,
        },
        {
          name: "rent",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "tokenPerSecond",
          type: "u64",
        },
      ],
    },
    {
      name: "createPool",
      accounts: [
        {
          name: "pool",
          isMut: true,
          isSigner: false,
        },
        {
          name: "state",
          isMut: true,
          isSigner: false,
        },
        {
          name: "mint",
          isMut: false,
          isSigner: false,
        },
        {
          name: "vault",
          isMut: true,
          isSigner: false,
        },
        {
          name: "authority",
          isMut: true,
          isSigner: true,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "tokenProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "associatedTokenProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "clock",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "point",
          type: "u64",
        },
        {
          name: "amountMultipler",
          type: "u64",
        },
      ],
    },
    {
      name: "fundRewardToken",
      accounts: [
        {
          name: "state",
          isMut: true,
          isSigner: false,
        },
        {
          name: "authority",
          isMut: true,
          isSigner: true,
        },
        {
          name: "rewardVault",
          isMut: true,
          isSigner: false,
        },
        {
          name: "userVault",
          isMut: true,
          isSigner: false,
        },
        {
          name: "tokenProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "amount",
          type: "u64",
        },
      ],
    },
    {
      name: "createUser",
      accounts: [
        {
          name: "user",
          isMut: true,
          isSigner: false,
        },
        {
          name: "state",
          isMut: true,
          isSigner: false,
        },
        {
          name: "pool",
          isMut: true,
          isSigner: false,
        },
        {
          name: "authority",
          isMut: true,
          isSigner: true,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "tokenProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [],
    },
    {
      name: "vest",
      accounts: [
        {
          name: "user",
          isMut: true,
          isSigner: false,
        },
        {
          name: "state",
          isMut: true,
          isSigner: false,
        },
        {
          name: "pool",
          isMut: true,
          isSigner: false,
        },
        {
          name: "authority",
          isMut: true,
          isSigner: true,
        },
        {
          name: "mint",
          isMut: false,
          isSigner: false,
        },
        {
          name: "poolVault",
          isMut: true,
          isSigner: false,
        },
        {
          name: "userVault",
          isMut: true,
          isSigner: false,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "tokenProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "clock",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "amount",
          type: "u64",
        },
      ],
    },
    {
      name: "unvest",
      accounts: [
        {
          name: "user",
          isMut: true,
          isSigner: false,
        },
        {
          name: "state",
          isMut: true,
          isSigner: false,
        },
        {
          name: "pool",
          isMut: true,
          isSigner: false,
        },
        {
          name: "authority",
          isMut: true,
          isSigner: true,
        },
        {
          name: "mint",
          isMut: false,
          isSigner: false,
        },
        {
          name: "poolVault",
          isMut: true,
          isSigner: false,
        },
        {
          name: "userVault",
          isMut: true,
          isSigner: false,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "tokenProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "clock",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "amount",
          type: "u64",
        },
      ],
    },
    {
      name: "harvest",
      accounts: [
        {
          name: "user",
          isMut: true,
          isSigner: false,
        },
        {
          name: "state",
          isMut: true,
          isSigner: false,
        },
        {
          name: "pool",
          isMut: true,
          isSigner: false,
        },
        {
          name: "authority",
          isMut: true,
          isSigner: true,
        },
        {
          name: "mint",
          isMut: false,
          isSigner: false,
        },
        {
          name: "rewardVault",
          isMut: true,
          isSigner: false,
        },
        {
          name: "userVault",
          isMut: true,
          isSigner: false,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "tokenProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "clock",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [],
    },
  ],
  accounts: [
    {
      name: "StateAccount",
      type: {
        kind: "struct",
        fields: [
          {
            name: "authority",
            type: "publicKey",
          },
          {
            name: "rewardMint",
            type: "publicKey",
          },
          {
            name: "rewardVault",
            type: "publicKey",
          },
          {
            name: "bump",
            type: "u8",
          },
          {
            name: "totalPoint",
            type: "u64",
          },
          {
            name: "startTime",
            type: "i64",
          },
          {
            name: "tokenPerSecond",
            type: "u64",
          },
        ],
      },
    },
    {
      name: "FarmPoolAccount",
      type: {
        kind: "struct",
        fields: [
          {
            name: "bump",
            type: "u8",
          },
          {
            name: "authority",
            type: "publicKey",
          },
          {
            name: "amount",
            type: "u64",
          },
          {
            name: "mint",
            type: "publicKey",
          },
          {
            name: "vault",
            type: "publicKey",
          },
          {
            name: "point",
            type: "u64",
          },
          {
            name: "lastRewardTime",
            type: "i64",
          },
          {
            name: "accRewardPerShare",
            type: "u128",
          },
          {
            name: "amountMultipler",
            type: "u64",
          },
          {
            name: "totalUser",
            type: "u64",
          },
        ],
      },
    },
    {
      name: "FarmPoolUserAccount",
      type: {
        kind: "struct",
        fields: [
          {
            name: "bump",
            type: "u8",
          },
          {
            name: "pool",
            type: "publicKey",
          },
          {
            name: "authority",
            type: "publicKey",
          },
          {
            name: "amount",
            type: "u64",
          },
          {
            name: "rewardAmount",
            type: "u128",
          },
          {
            name: "extraReward",
            type: "u128",
          },
          {
            name: "rewardDebt",
            type: "u128",
          },
          {
            name: "lastVestTime",
            type: "i64",
          },
          {
            name: "lockDuration",
            type: "i64",
          },
          {
            name: "reserved1",
            type: "u128",
          },
          {
            name: "reserved2",
            type: "u128",
          },
          {
            name: "reserved3",
            type: "u128",
          },
        ],
      },
    },
  ],
  events: [
    {
      name: "PoolCreated",
      fields: [
        {
          name: "pool",
          type: "publicKey",
          index: false,
        },
        {
          name: "mint",
          type: "publicKey",
          index: false,
        },
      ],
    },
    {
      name: "UserCreated",
      fields: [
        {
          name: "pool",
          type: "publicKey",
          index: false,
        },
        {
          name: "user",
          type: "publicKey",
          index: false,
        },
        {
          name: "authority",
          type: "publicKey",
          index: false,
        },
      ],
    },
    {
      name: "UserVested",
      fields: [
        {
          name: "pool",
          type: "publicKey",
          index: false,
        },
        {
          name: "user",
          type: "publicKey",
          index: false,
        },
        {
          name: "authority",
          type: "publicKey",
          index: false,
        },
        {
          name: "amount",
          type: "u64",
          index: false,
        },
      ],
    },
    {
      name: "UserUnvested",
      fields: [
        {
          name: "pool",
          type: "publicKey",
          index: false,
        },
        {
          name: "user",
          type: "publicKey",
          index: false,
        },
        {
          name: "authority",
          type: "publicKey",
          index: false,
        },
        {
          name: "amount",
          type: "u64",
          index: false,
        },
      ],
    },
    {
      name: "UserHarvested",
      fields: [
        {
          name: "pool",
          type: "publicKey",
          index: false,
        },
        {
          name: "user",
          type: "publicKey",
          index: false,
        },
        {
          name: "authority",
          type: "publicKey",
          index: false,
        },
        {
          name: "amount",
          type: "u64",
          index: false,
        },
      ],
    },
  ],
  errors: [
    {
      code: 6000,
      name: "UnvestOverAmount",
      msg: "Over vested amount",
    },
    {
      code: 6001,
      name: "UnderLocked",
      msg: "Under locked",
    },
    {
      code: 6002,
      name: "WorkingPool",
      msg: "Pool is working",
    },
    {
      code: 6003,
      name: "InvalidLockDuration",
      msg: "Invalid Lock Duration",
    },
    {
      code: 6004,
      name: "InvalidSEQ",
      msg: "Invalid SEQ",
    },
  ],
  metadata: {
    address: "HeugMFXgTbH1ndEMi3fPsJKSe9qPFDf7swQAGGqpspUn",
  },
};
