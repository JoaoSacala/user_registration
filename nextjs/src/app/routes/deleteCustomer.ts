'use server'
import { revalidateTag } from "next/cache"
import { api } from "../services/api"

export async function deleteCustomer(formData: FormData) {
    const id = formData.get('id') as string
  
    await api.delete('/customer', {
      params: { id }
    })
  
    revalidateTag('customer')
  }