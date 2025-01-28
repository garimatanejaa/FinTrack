import { getUserAccounts } from '@/actions/dashboard';
import { defaultCategories } from '@/data/categories';
import React from 'react'
import AddTransactionForm from '../_components/transaction-form';
import { getTransaction } from '@/actions/transaction';

export default async function AddTransactionPage({ searchParams}) {
    const accounts = await getUserAccounts();
    const editId = searchParams?.edit;
    let  initialData = null;
    if(editId){
        const transaction = await getTransaction(editId);
        initialData = transaction;
    }
  return (
    <div className = "max-w-3xl mx-auto px-5">
        <h1 className = "text-4xl mb-8 bg-gradient-to-r from-black via-gray-800 to-black bg-clip-text text-transparent">{editId? "Edit": "Add"} a transaction?</h1>
        <AddTransactionForm
        accounts={accounts}
        categories={defaultCategories}
        editMode = {!!editId}
        initialData={initialData}/>
    </div>
  )
}

