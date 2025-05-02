
'use server'
import { revalidateTag } from 'next/cache'
import { api } from "../services/api"

type Customer = {
  name: string
  email: string
}

export async function createCustomer(formData: FormData) {
  const entries = Array.from(formData.entries())
  const data = Object.fromEntries(entries)
  const customer = data as Customer

  if (!customer.name || !customer.email) {
    throw new Error('Name and email are required')
  }
  await api.post('/customer', customer)
  
    revalidateTag('customer')
  }