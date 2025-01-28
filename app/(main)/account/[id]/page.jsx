import { getAccountWithTransactions } from '@/actions/accounts';
import { notFound } from 'next/navigation';
import React, { Suspense } from 'react'
import TransactionTable from '../_components/transaction-table';
import { BarLoader } from 'react-spinners';
import AccountChart from '../_components/account-chart';

export default async function  AccountPage({ params }) {
    
    const accountData = await getAccountWithTransactions(params.id);
  

    if (!accountData) {
      notFound();
    }
    const { transactions, ...account } = accountData;
    return (
    <div className="  space-y-8 px-5">
        <div className = "flex gap-4 items-end justify-between">
            <h1 className="text-5xl sm:text-5xl font-bold tracking-wide bg-gradient-to-r from-black via-gray-800 to-black text-transparent bg-clip-text capitalize" >{account.name}</h1>
            <p className="text-muted-foreground"> {account.type.charAt(0) + account.type.slice(1).toLowerCase()}
            Account</p>

       
        <div className="text-right pb-2">
            <div className="text-lg sm:text-lg font-bold">
            ₹{parseFloat(account.balance).toFixed(2)}
            <p className="text-sm text-muted-foreground">{account._count.transactions}Transactions</p>
            </div>
            </div>
        </div>
        <Suspense fallback={<BarLoader className="mt-4" width={"100%"} color="#9333ea" />}>
            <AccountChart transactions={transactions} />
        </Suspense>
        <Suspense fallback={<BarLoader className="mt-4" width={"100%"} color="#9333ea" />}>
            <TransactionTable transactions={transactions} />
        </Suspense>
         
    </div>
    );
};