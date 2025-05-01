
'use server'
import { revalidateTag } from 'next/cache'
import { api } from "../services/api"


  export async function createCustomer(formData: FormData) {
    const name = formData.get('name') as string
    const email = formData.get('email') as string
    await api.post('/customer', { name, email })
  
    revalidateTag('customer')
  }