
import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { api } from '../services/api';

interface Transaction {
    id: number;
    title: string;
    amount: number;
    type: string;
    category: string;
    createdAt: string;
}

// interface TransactionInput {
//     title: string;
//     amount: number;
//     type: string;
//     category: string;
// }

type TransactionInput = Pick<Transaction, 'title' | 'amount' | 'type' | 'category'>

/* acima estou pegando estas informações da interface transaction, assim não preciso criar outra interface conforme
exemplo (Transactio Input) comentado */

interface TransactionsProviderProps {
    children: ReactNode;
    /* ReactNode: aceita qualquer tipo de dado que é aceito pelo React*/
}

interface TransactionsContextData {
    transactions: Transaction[];
    createTransaction: (transaction: TransactionInput) => Promise<void>;
}


const TransactionsContext = createContext<TransactionsContextData>(
    {} as TransactionsContextData);

export function TransactionsProvider({ children }: TransactionsProviderProps){
    const[transactions, setTransactions] = useState<Transaction[]>([]);

    useEffect(() => {
        api.get('transactions')
        .then(response => setTransactions(response.data.transactions))   
    }, []); 

    async function createTransaction(transactionInput: TransactionInput) {
        /* abaixo estou criando a nova linha na lista */
        const response = await api.post('/transactions', {
            ...transactionInput,
            createdAt: new Date(),
        })
        const { transaction } = response.data;

        /* setTransactions: estou incluindo as informações que já existem, mais a transação incluída agora */
        setTransactions([
            ...transactions,
            transaction,
        ]);
    }

    return(
        <TransactionsContext.Provider value={{transactions, createTransaction}}>
            {children}
        </TransactionsContext.Provider>
    );
}

export function useTransactions(){
    const context = useContext(TransactionsContext);

    return context;
}