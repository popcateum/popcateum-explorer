import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          // App Bar
          "Explorer": "Explorer",
          "Enter an Address, Transaction Hash or Block Number": "Enter an Address, Transaction Hash or Block Number",
          "JSON-RPC API Documentation": "JSON-RPC API Documentation",
          "Jade Explorer Github": "Jade Explorer Github",
          "Toggle Dark Mode": "Toggle Dark Mode",
          // Dashboard
          "Block Height": "Block Height",
          "Chain ID": "Chain ID",
          "Syncing": "Syncing",
          "Gas Price": "Gas Price",
          "Network Hash Rate": "Network Hash Rate",
          "Pending Transactions": "PendingTransactions",
          "Peers": "Peers",
          "Hash Rate last blocks": "Hash Rate last block",
          "Hash Rate last blocks_plural": "Hash Rate last {{count}} blocks",
          "Transaction count last blocks": "Transaction count last block",
          "Transaction count last blocks_plural": "Transaction count last {{count}} blocks",
          "Gas Used last blocks": "Gas Used last block",
          "Gas Used last blocks_plural": "Gas Used last {{count}} blocks",
          "Uncles last blocks": "Uncles last block",
          "Uncles last blocks_plural": "Uncles last {{count}} blocks",
          // block list
          "Block Number": "Block Number",
          "Hash": "Hash",
          "Timestamp": "Timestamp",
          "Transactions": "Transactions",
          // block view
          "Number": "Number",
          "ParentHash": "ParentHash",
          "Miner": "Miner",
          "Nonce": "Nonce",
          "Difficulty": "Difficulty",
          "Extra Data": "Extra Data",
          "State Root": "State Root",
          "Transaction Root": "Transaction Root",
          "Receipts Root": "Receipts Root",
          // transaction view
          "Block": "Block",
          "Gas Used": "Gas Used",
          "Cumulative Gas Used": "Cumulative Gas Used",
          "Value in Ether": "Value in Ether",
          "From": "From",
          "To": "To",
          "Contract Address": "Contract Address",
          "Transaction Index": "Transaction Index",
          "Receipt Status": "Receipt Status",
          "Receipt Logs": "Receipt Logs",
          // address view
          "Address": "Address",
          "Balance": "Balance",
          "Code": "Code",
          // configuration menu
          "Configuration": "Configuration",
          "Back": "Back",
          "Ethereum RPC": "Ethereum RPC",
          "Service Runner RPC": "Service Runner RPC",
        },
      },
    },
  });
