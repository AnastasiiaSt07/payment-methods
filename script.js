const form = document.querySelector('#form-select');
const placeTable = document.querySelector('.place-table');

const paymentMethodsInfo = [
  {
    id: 1,
    name: 'accentpay_webmoney_payin(WebMoney)',
    tableInfo: [
      {
        type: 'Deposit', methods: 'accentpay_webmoney_payout(WebMoney)', ccy: ['USD'], min: [0.1], max: [1000000]
      },
      {
        type: 'Profit', methods: 'moneta_plastic_payout (capitalist)(Visa/Mastercard (CupPay))', ccy: ['USD', 'RUB'], min: [1000, 20], max: [75000, 1000]
      }
    ]
  },
//AdvCash--------------------------------------------------------------------------
 {
    id: 2,
    name: 'advcash_advcash_payin(AdvCash)',
    tableInfo: [
      { 
        type: 'Deposit', methods: 'advcash_advcash_payout(AdvCash)', ccy: ['EUR', 'RUB', 'USD'], min: [10, 1000, 10], max: [6000, 500000, 8000]
      },
      {
        type: 'Profit', methods: 'moneta_plastic_payout (capitalist)(Visa/Mastercard(CupPay))', ccy: ['RUB','USD'], min: [1000, 20], max: [75000, 1000]
      }
    ]
  },
//advcash_bitcoincash
  {
    id: 3,
    name: 'namadvcash_bitcoincash_payin(Bitcoin Cash (BCH))',
    tableInfo: [
      {
        type: 'Deposit', methods: 'advcash_bitcoincash_payout(Bitcoin Cash (BCH))', ccy: ['EUR', 'RUB', 'USD'], min: [30, 2500, 30], max: [6000, 500000, 8000]
      },
      {
        type: 'Profit', methods: 'moneta_plastic_payout (capitalist)(Visa/Mastercard (CupPay))', ccy: ['RUB','USD'], min: [1000, 20], max: [75000, 1000]
      }
    ]
  },
//advcash_ethereum
  {
    id: 4,
    name: 'advcash_ethereum_payin(Ethereum(ETH))',
    tableInfo: [
      {
        type: 'Deposit', methods: 'advcash_ethereum_payout(Ethereum (ETH))', ccy: ['EUR', 'RUB', 'USD'], min: [60, 5000, 60], max: [6000, 500000, 8000]
      },
      {
        type: 'Profit', methods: 'moneta_plastic_payout (capitalist)(Visa/Mastercard (CupPay))', ccy: ['RUB','USD'], min: [1000, 20], max: [75000, 1000]
      }
    ]
  },  
//advcash_litecoin_miocrypto
  {
    id: 5,
    name: 'advcash_litecoin_payin(miocrypto)(MioCrypto (LTC))',
    tableInfo: [
      {
        type: 'Deposit', methods: 'advcash_litecoin_payout(Litecoin (LTC))', ccy: ['EUR', 'RUB', 'USD'], min: [30, 2600, 35], max: [6000, 500000, 8000]
      },
      {
        type: 'Profit', methods: 'moneta_plastic_payout (capitalist)(Visa/Mastercard (CupPay))', ccy: ['RUB','USD'], min: [1000, 20], max: [75000, 1000]
      }
    ]
  }, 
//advcash_litecoin_miocrypto
  {
    id: 6,
    name: 'advcash_litecoin_payin(Litecoin (LTC))',
    tableInfo: [
      {
        type: 'Deposit', methods: 'advcash_litecoin_payout(Litecoin (LTC))', ccy: ['EUR', 'RUB', 'USD'], min: [30, 2600, 35], max: [6000, 500000, 8000]
      },
      {
        type: 'Profit', methods: 'moneta_plastic_payout (capitalist)(Visa/Mastercard (CupPay))', ccy: ['RUB','USD'], min: [1000, 20], max: [75000, 1000]
      }
    ]
  },
//advcash_ripple
  {
    id: 7,
    name: 'advcash_ripple_payin(Ripple (XRP))',
    tableInfo: [
      {
        type: 'Deposit', methods: 'advcash_ripple_payout(Ripple (XRP))', ccy: ['EUR', 'RUB', 'USD'], min: [30, 2500, 30], max: [6000, 500000, 8000]
      },
      {
        type: 'Profit', methods: 'moneta_plastic_payout (capitalist)(Visa/Mastercard(CupPay))', ccy: ['RUB','USD'], min: [1000, 20], max: [75000, 1000]
      }
    ]
  }, 
//advcash_usdt
  {
    id: 8,
    name: 'advcash_usdt_payin(MioCrypto (USDT))',
    tableInfo: [
      {
        type: 'Deposit', methods: 'advcash_usdt_payout(Tether(USDt))', ccy: ['USD'], min: [50], max: [10000]
      },
      {
        type: 'Profit', methods: 'moneta_plastic_payout(capitalist)(Visa/Mastercard (CupPay))', ccy: ['RUB','USD'], min: [1000, 20], max: [75000, 1000]
      }
    ]
  }, 
//advcash_usdt_miocrypto
  {
    id: 9,
    name: 'advcash_usdt_payin(miocrypto)(Tether(USDt))',
    tableInfo: [
      {
        type: 'Deposit', methods: 'advcash_usdt_payout(Tether(USDt))', ccy: ['USD'], min: [50], max: [10000]
      },
      { 
        type: 'Profit', methods: 'moneta_plastic_payout(capitalist)(Visa/Mastercard (CupPay))', ccy: ['RUB','USD'], min: [1000, 20], max: [75000, 1000]
      }
    ]
  }, 
//advcash_zcash
  {
    id: 10,
    name: 'advcash_zcash_payin(Zcash (ZEC))',
    tableInfo: [
      {
        type: 'Deposit', methods: 'advcash_zcash_payout(Zcash (ZEC))', ccy: ['EUR', 'RUB', 'USD'], min: [30, 2500, 30], max: [6000, 500000, 8000]
      },
      {
        type: 'Profit', methods: 'moneta_plastic_payout(capitalist)(Visa/Mastercard (CupPay))', ccy: ['RUB','USD'], min: [1000, 20], max: [75000, 1000]
      }
    ]
  }, 
//Bitcoin------------------------------------------------------------------
//Visa/Mastercard(MioCrypto)
  {
    id: 11,
    name: 'bitcoin_bitcoin_payin(Visa/Mastercard(MioCrypto))',
    tableInfo: [
      {
        type: 'Deposit', methods: 'bitcoin_bitcoin_payout(Bitcoin(BTC))', ccy: ['EUR', 'RUB', 'USD'], min: [10, 750, 10], max: [6000, 500000, 8000]
      },
      {
        type: 'Profit', methods: 'moneta_plastic_payout(capitalist)(Visa/Mastercard (CupPay))', ccy: ['RUB','USD'], min: [1000, 20], max: [75000, 1000]
      }
    ]
  }, 
//Bitcoin(BTC)
  {
    id: 12,
    name: 'bitcoin_bitcoin_payin(miocrypto)(Bitcoin(BTC))',
    tableInfo: [
      {
        type: 'Deposit', methods: 'bitcoin_bitcoin_payout(Bitcoin(BTC))', ccy: ['EUR', 'RUB', 'USD'], min: [10, 750, 10], max: [6000, 500000, 8000]
      },
      {
        type: 'Profit', methods: 'moneta_plastic_payout (capitalist)(Visa/Mastercard (CupPay))', ccy: ['RUB','USD'], min: [1000, 20], max: [75000, 1000]
      }
    ]
  }, 
//ecommpay--------------------------------------------------------------------
  {
    id: 13,
    name: 'ecommpay_plastic_payin(Masterсard/Visa (EPay))',
    tableInfo: [
      {
        type: 'Deposit', methods: 'bitcoin_bitcoin_payout(Bitcoin(BTC))', ccy: ['EUR', 'RUB', 'USD'], min: [10, 150, 10], max: [1000, 750000, 1000]
      },
      {
        type: 'Profit', methods: 'moneta_plastic_payout (capitalist)(Visa/Mastercard (CupPay))', ccy: ['RUB','USD'], min: [1000, 20], max: [75000, 1000]
      }
    ]
  },
//Fasapay----------------------------------------------------------------------
  {
    id: 14,
    name: 'fasapay_payin(FasaPay)',
    tableInfo: [
      {
        type: 'Deposit', methods: 'fasapay_payout(FasaPay)', ccy: ['USD'], min: [2], max: [1000000]
      },
      {
        type: 'Profit', methods: 'moneta_plastic_payout (capitalist)(Visa/Mastercard(CupPay))', ccy: ['RUB','USD'], min: [1000, 20], max: [75000, 1000]
      }
    ]
  },
//Help2Pay---------------------------------------------------------------------
//help2pay_indonesia
  {
    id: 15,
    name: 'help2pay_indonesia_banks_payin(Instant bank transfer (Help2Pay))',
    tableInfo: [
      {
        type: 'Deposit', methods: 'help2pay_indonesia_banks_payout(Instant bank transfer(Help2Pay))', ccy: ['USD'], min: [50], max: [10000]
      },
      {
        type: 'Profit', methods: 'moneta_plastic_payout (capitalist)(Visa/Mastercard(CupPay))', ccy: ['RUB','USD'], min: [1000, 20], max: [75000, 1000]
      }
    ]
  },
//help2pay_malaysia
{
    id: 16,
    name: 'help2pay_malaysia_banks_payin(Instant bank transfer(Help2Pay))',
    tableInfo: [
      {
        type: 'Deposit', methods: 'help2pay_malaysia_banks_payout(Instant bank transfer(Help2Pay))', ccy: ['USD'], min: [50], max: [10000]
      },
      {
        type: 'Profit', methods: 'moneta_plastic_payout (capitalist)(Visa/Mastercard(CupPay))', ccy: ['RUB','USD'], min: [1000, 20], max: [75000, 1000]
      }
    ]
  },
//help2pay_philippines
{
    id: 17,
    name: 'help2pay_philippines_banks_payin(Instant bank transfer(Help2Pay))',
    tableInfo: [
      {
        type: 'Deposit', methods: 'help2pay_philippines_banks_payout(Instant bank transfer(Help2Pay))', ccy: ['USD'], min: [50], max: [10000]
      },
      {
        type: 'Profit', methods: 'moneta_plastic_payout(capitalist)(Visa/Mastercard(CupPay))', ccy: ['RUB','USD'], min: [1000, 20], max: [75000, 1000]
      }
    ]
  }, 
//help2pay_thailand
{
    id: 18,
    name: 'help2pay_thailand_banks_payin(Instant bank transfer(Help2Pay))',
    tableInfo: [
      {
        type: 'Deposit', methods: 'help2pay_thailand_banks_payout(Instant bank transfer(Help2Pay))', ccy: ['USD'], min: [50], max: [10000]
      },
      {
        type: 'Profit', methods: 'moneta_plastic_payout(capitalist)(Visa/Mastercard(CupPay))', ccy: ['RUB','USD'], min: [1000, 20], max: [75000, 1000]
      }
    ]
  }, 
//help2pay_vietnam  
{
    id: 19,
    name: 'help2pay_vietnam_banks_payin(Instant bank transfer(Help2Pay))',
    tableInfo: [
      {
        type: 'Deposit', methods: 'help2pay_vietnam_banks_payout(Instant bank transfer (Help2Pay))', ccy: ['USD'], min: [50], max: [10000]
      },
      {
        type: 'Profit', methods: 'moneta_plastic_payout(capitalist)(Visa/Mastercard (CupPay))', ccy: ['RUB','USD'], min: [1000, 20], max: [75000, 1000]
      }
    ]
  }, 
//Neteller----------------------------------------------------------------------
{
    id: 20,
    name: 'neteller_neteller_payin(NETELLER)',
    tableInfo: [
      {
        type: 'Deposit', methods: 'neteller_neteller_payout(NETELLER)', ccy: ['EUR', 'RUB', 'USD'], min: [2, 200, 2], max: [1000000, 1000000, 1000000]
      },
      {
        type: 'Profit', methods: 'moneta_plastic_payout(capitalist)(Visa/Mastercard(CupPay))', ccy: ['RUB','USD'], min: [1000, 20], max: [75000, 1000]
      }
    ]
  },
//Ngan Luong---------------------------------------------------------------------
//nganluong_atm
{
    id: 21,
    name: 'nganluong_atm_offline(ATM(Ngân Lượng ATM))',
    tableInfo: [
      {
         
        type: 'Deposit', methods: 'nganluong_nl_payout(Ngân Lượng e-wallet)', ccy: ['USD'], min: [0.1], max: [1000000]
      },
      {
        type: 'Profit', methods: 'moneta_plastic_payout(capitalist)(Visa/Mastercard(CupPay))', ccy: ['RUB','USD'], min: [1000, 20], max: [75000, 1000]
      }
    ]
  },
//nganluong_ib_online
{
    id: 22,
    name: 'nganluong_ib_online(Ngân Lượng Online Internet Banking)',
    tableInfo: [
      {
        type: 'Deposit', methods: 'nganluong_nl_payout(Ngân Lượng e-wallet)', ccy: ['USD'], min: [0.1], max: [1000000]
      },
      {
        type: 'Profit', methods: 'moneta_plastic_payout(capitalist)(Visa/Mastercard(CupPay))', ccy: ['RUB','USD'], min: [1000, 20], max: [75000, 1000]
      }
    ]
  },
//nganluong_nh_offline
{
    id: 23,
    name: 'nganluong_nh_offline(Ngân Lượng e-wallet)',
    tableInfo: [
      {
         
        type: 'Deposit', methods: 'nganluong_nl_payout(Ngân Lượng e-wallet)', ccy: ['USD'], min: [0.1], max: [1000000]
      },
      {
        type: 'Profit', methods: 'moneta_plastic_payout(capitalist)(Visa/Mastercard(CupPay))', ccy: ['RUB','USD'], min: [1000, 20], max: [75000, 1000]
      }
    ]
  }, 
//nganluong_nl
{
    id: 24,
    name: 'nganluong_nl_payin(Ngân Lượng e-wallet)',
    tableInfo: [
      {
         
        type: 'Deposit', methods: 'nganluong_nl_payout(Ngân Lượng e-wallet)', ccy: ['USD'], min: [0.1], max: [1000000]
      },
      {
        type: 'Profit', methods: 'moneta_plastic_payout(capitalist)(Visa/Mastercard(CupPay))', ccy: ['RUB','USD'], min: [1000, 20], max: [75000, 1000]
      }
    ]
  },
//Qubipay--------------------------------------------------------------------------------
{
    id: 25,
    name: 'qubipay_plastic_payin(Qubipay)',
    tableInfo: [
      {
        type: 'Deposit', methods: '-', ccy: [], min: [], max: []
      },
      {
        type: 'Profit', methods: 'moneta_plastic_payout(capitalist)(Visa/Mastercard(CupPay))', ccy: ['RUB','USD'], min: [1000, 20], max: [75000, 1000]
      }
    ]
  },
  //SilverExpress
{
    id: 26,
    name: 'silverexpress_plastic_payin(silverexpress_plastic_payin)',
    tableInfo: [
      {
        type: 'Deposit', methods: '-', ccy: [], min: [], max: []
      },
      {
        type: 'Profit', methods: 'moneta_plastic_payout(capitalist)(Visa/Mastercard(CupPay))', ccy: ['RUB','USD'], min: [1000, 20], max: [75000, 1000]
      }
    ]
  },
//Skrill----------------------------------------------------------------------------------
{
    id: 27,
    name: 'skrill_payin(Skrill)',
    tableInfo: [
      {
        type: 'Deposit', methods: 'skrill_payout(Skrill)', ccy: ['EUR','USD'], min: [1], max: [1000000]
      },
      {
        type: 'Profit', methods: 'moneta_plastic_payout (capitalist)(Visa/Mastercard (CupPay))', ccy: ['RUB','USD'], min: [1000, 20], max: [75000, 1000]
      }
    ]
  },
//Sorex-----------------------------------------------------------------------------------
{
    id: 28,
    name: 'sorex_plastic_payin(Visa(RexPay))',
    tableInfo: [
      {
        type: 'Deposit', methods: 'sorex_plastic_payout(Masterсard/Visa/Mir(RexPay))', ccy: ['EUR','RUB','USD'], min: [10, 150, 10], max: [1000, 75000, 1000]
      },
      {
        type: 'Profit', methods: 'moneta_plastic_payout(capitalist)(Visa/Mastercard(CupPay))', ccy: ['RUB','USD'], min: [1000, 20], max: [75000, 1000]
      }
    ]
  },
//Unonapay--------------------------------------------------------------------------------
{
    id: 29,
    name: 'unonapay_plastic_payin(Visa/Mastercard/Maestro (UnoPay))',
    tableInfo: [
      {
        type: 'Deposit', methods: '-', ccy: [], min: [], max: []
      },
      {
        type: 'Profit', methods: 'moneta_plastic_payout(capitalist)(Visa/Mastercard (CupPay))', ccy: ['RUB','USD'], min: [1000, 20], max: [75000, 1000]
      }
    ]
  },
//Wire transfer---------------------------------------------------------------------------
//payoma_eur
{
    id: 30,
    name: 'payoma_eur(Payoma)',
    tableInfo: [
      {
        type: 'Deposit', methods: 'wire_transfer_out(Wire transfer)', ccy: ['USD'], min: [10], max: [1000]
      },
      {
        type: 'Profit', methods: 'moneta_plastic_payout(capitalist)(Visa/Mastercard(CupPay))', ccy: ['RUB','USD'], min: [1000, 20], max: [75000, 1000]
      }
    ]
  },
//payoma_rub
{
    id: 31,
    name: 'payoma_rub(Payoma)',
    tableInfo: [
      {
        type: 'Deposit', methods: 'wire_transfer_out(Wire transfer)', ccy: ['USD'], min: [10], max: [1000]
      },
      {
        type: 'Profit', methods: 'moneta_plastic_payout(capitalist)(Visa/Mastercard(CupPay))', ccy: ['RUB','USD'], min: [1000, 20], max: [75000, 1000]
      }
    ]
  },
//payoma_usd
{
    id: 32,
    name: 'payoma_usd(Payoma)',
    tableInfo: [
      {
        type: 'Deposit', methods: 'wire_transfer_out(Wire transfer)', ccy: ['USD'], min: [10], max: [1000]
      },
      {
        type: 'Profit', methods: 'moneta_plastic_payout(capitalist)(Visa/Mastercard(CupPay))', ccy: ['RUB','USD'], min: [1000, 20], max: [75000, 1000]
      }
    ]
  },
//tether_usd_payin
{
    id: 33,
    name: 'tether_usd_payin(Tether (USDT))',
    tableInfo: [
      {
        type: 'Deposit', methods: 'wire_transfer_out(Wire transfer)', ccy: ['USD'], min: [10], max: [1000]
      },
      {
        type: 'Profit', methods: 'moneta_plastic_payout(capitalist)(Visa/Mastercard(CupPay))', ccy: ['RUB','USD'], min: [1000, 20], max: [75000, 1000]
      }
    ]
  },
//wire_transfer_rocketpay_eu_eur_payin
{
    id: 34,
    name: 'wire_transfer_rocketpay_eu_eur_payin(Bank transfer SEPA(RPay))',
    tableInfo: [
      {
        type: 'Deposit', methods: 'wire_transfer_out(Wire transfer)', ccy: ['USD'], min: [10], max: [1000]
      },
      {
        type: 'Profit', methods: 'moneta_plastic_payout(capitalist)(Visa/Mastercard(CupPay))', ccy: ['RUB','USD'], min: [1000, 20], max: [75000, 1000]
      }
    ]
  },
//wire_transfer_rocketpay_kg_eur_payin
{
    id: 35,
    name: 'wire_transfer_rocketpay_kg_eur_payin(Bank transfer SWIFT (RPay))',
    tableInfo: [
      {
        type: 'Deposit', methods: 'wire_transfer_out(Wire transfer)', ccy: ['USD'], min: [10], max: [1000]
      },
      {
        type: 'Profit', methods: 'moneta_plastic_payout(capitalist)(Visa/Mastercard(CupPay))', ccy: ['RUB','USD'], min: [1000, 20], max: [75000, 1000]
      }
    ]
  },
//wire_transfer_rocketpay_kg_usd_payin
{
    id: 36,
    name: 'wire_transfer_rocketpay_kg_usd_payin(Bank transfer SWIFT(RPay))',
    tableInfo: [
      {
        type: 'Deposit', methods: 'wire_transfer_out(Wire transfer)', ccy: ['USD'], min: [10], max: [1000]
      },
      {
        type: 'Profit', methods: 'moneta_plastic_payout(capitalist)(Visa/Mastercard(CupPay))', ccy: ['RUB','USD'], min: [1000, 20], max: [75000, 1000]
      }
    ]
  },
//wire_transfer_rocketpay_thai_eur_payin
{
    id: 37,
    name: 'wire_transfer_rocketpay_thai_eur_payin(Bank transfer SWIFT(RPay))',
    tableInfo: [
      {
        type: 'Deposit', methods: 'wire_transfer_out(Wire transfer)', ccy: ['USD'], min: [10], max: [1000]
      },
      {
        type: 'Profit', methods: 'moneta_plastic_payout(capitalist)(Visa/Mastercard(CupPay))', ccy: ['RUB','USD'], min: [1000, 20], max: [75000, 1000]
      }
    ]
  },
//wire_transfer_rocketpay_thai_usd_payin
{
    id: 38,
    name: 'wire_transfer_rocketpay_thai_usd_payin(Bank transfer SWIFT(RPay))',
    tableInfo: [
      {
        type: 'Deposit', methods: 'wire_transfer_out(Wire transfer)', ccy: ['USD'], min: [10], max: [1000]
      },
      {
        type: 'Profit', methods: 'moneta_plastic_payout(capitalist)(Visa/Mastercard(CupPay))', ccy: ['RUB','USD'], min: [1000, 20], max: [75000, 1000]
      }
    ]
  },
//wire_transfer_wireswise_eur_payin
{
    id: 39,
    name: 'wire_transfer_wireswise_eur_payin(Bank transfer(SWIFT))',
    tableInfo: [
      {
        type: 'Deposit', methods: 'wire_transfer_out(Wire transfer)', ccy: ['USD'], min: [10], max: [1000]
      },
      {
        type: 'Profit', methods: 'moneta_plastic_payout(capitalist)(Visa/Mastercard(CupPay))', ccy: ['RUB','USD'], min: [1000, 20], max: [75000, 1000]
      }
    ]
  },
//wire_transfer_wireswise_usd_payin
{
    id: 40,
    name: 'wire_transfer_wireswise_usd_payin(Bank transfer(SWIFT))',
    tableInfo: [
      {
        type: 'Deposit', methods: 'wire_transfer_out(Wire transfer)', ccy: ['USD'], min: [10], max: [1000]
      },
      {
        type: 'Profit', methods: 'moneta_plastic_payout(capitalist)(Visa/Mastercard(CupPay))', ccy: ['RUB','USD'], min: [1000, 20], max: [75000, 1000]
      }
    ]
  },
//Zotapay---------------------------------------------------------------------------------
//zotapay_indonesia
{
    id: 41,
    name: 'zotapay_indonesia_banks_payin(Instant bank transfer)',
    tableInfo: [
      {
        type: 'Deposit', methods: 'zotapay_indonesia_banks_payout(Instant bank transfer)', ccy: ['USD'], min: [20], max: [3000]
      },
      {
        type: 'Profit', methods: 'moneta_plastic_payout(capitalist)(Visa/Mastercard(CupPay))', ccy: ['RUB','USD'], min: [1000, 20], max: [75000, 1000]
      }
    ]
  },
//zotapay_malaysia
{
    id: 42,
    name: 'zotapay_malaysia_banks_payin(Instant bank transfer)',
    tableInfo: [
      {
        type: 'Deposit', methods: 'zotapay_malaysia_banks_payout(Instant bank transfer)', ccy: ['USD'], min: [20], max: [7000]
      },
      {
        type: 'Profit', methods: 'moneta_plastic_payout(capitalist)(Visa/Mastercard(CupPay))', ccy: ['RUB','USD'], min: [1000, 20], max: [75000, 1000]
      }
    ]
  },
//zotapay_thailand_banks_payin
{
    id: 43,
    name: 'zotapay_thailand_banks_payin(Instant bank transfer)',
    tableInfo: [
      {
        type: 'Deposit', methods: 'zotapay_thailand_banks_payout(Instant bank transfer)', ccy: ['USD'], min: [20], max: [7000]
      },
      {
        type: 'Profit', methods: 'moneta_plastic_payout (capitalist)(Visa/Mastercard (CupPay))', ccy: ['RUB','USD'], min: [1000, 20], max: [75000, 1000]
      }
    ]
  },
//zotapay_vietnam_banks_payin
{
    id: 44,
    name: 'zotapay_vietnam_banks_payin(Instant bank transfer)',
    tableInfo: [
      {
        type: 'Deposit', methods: 'zotapay_vietnam_banks_payout(Instant bank transfer)', ccy: ['USD'], min: [20], max: [7000]
      },
      {
        type: 'Profit', methods: 'moneta_plastic_payout(capitalist)(Visa/Mastercard(CupPay))', ccy: ['RUB','USD'], min: [1000, 20], max: [75000, 1000]
      }
    ]
  },
];

const select = createSelect(placeTable, paymentMethodsInfo);
form.append(select);
printTable(placeTable, select, paymentMethodsInfo);

function createSelect(whereToInsertNode, infoArr) {
  const select = document.createElement('select');
  select.setAttribute('name', 'crypto-select');
  select.setAttribute('id', 'crypto-select');
  const infoNames = infoArr.map(item => {
    return `<option value='${item.id}'>${item.name}</option>`;
  });

  select.addEventListener('change', (e) => {
    e.preventDefault();
    printTable(whereToInsertNode, select, infoArr);
  });

  select.innerHTML = infoNames.join('');
  
  return select;
}

function createTable(objPayment) {
  const table = document.createElement('table');
  table.classList.add('table')

  const TrLines = objPayment.tableInfo.map(item => `
    <tr>
      <td>${item.type}</td>
      <td>${item.methods}</td>
      <td>${item.ccy.join(', ')}</td>
      <td>${item.min.join(', ')}</td>
      <td>${item.max.join(', ')}</td>
    </tr>
  `).join('');

  table.innerHTML = `
    <thead>
      <tr>
        <th>Type</th>
        <th>Outgoing methods</th>
        <th>Ccy</th>
        <th>Min amount</th>
        <th>Max amount</th>
      </tr>
    </thead>
    <tbody>
      ${TrLines}
    </tbody>
  `;

  return table;
}

function printTable(whereToInsertNode, select, infoArr) {
  const value = activeOptionValue(select);
  const objPayment = findPaymentById(value, infoArr);
  const table = createTable(objPayment);
  whereToInsertNode.innerText = '';
  whereToInsertNode.append(table);
}

function activeOptionValue(selectNode) {
  const selectedIdx = selectNode.selectedIndex;
  const activeOptionNode = selectNode.options[selectNode.selectedIndex];
  const value = activeOptionNode.value; // value у выбранного option
  if (!isNaN(Number(value))) {
    return Number(value);
  }
  return value;
}

function findPaymentById(id, infoArr) {
  if (isNaN(Number(id))) {
    return false;
  }

  return infoArr.find(item => item.id === id);
}




// const arr = [1, 3, 9, 30];
// const arr2x = arr.map(item => item * 2);
// const arr2x1 = arr.map((item) => item * 2);
// const arr2x2 = arr.map((item, i, arr) => item * 2);
// const arr2x3 = arr.map((item) => {
//   return item * 2;
// });
// const arr2x4 = arr.map((item, i, arr) => {
//   return item * 2;
// });
// const arr2x5 = arr.map(function(item, i, arr) {
//   return item * 2;
// });
// const arr2x6 = arr.map(function(item) {
//   return item * 2;
// });
// console.log(arr2x);
