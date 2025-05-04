import { api } from "../services/api"

interface CustomerProps {
    name: string
    email: string
    status: string
    id: string
  }
  
export async function getCustomer(): Promise<CustomerProps[]> {

    const response = await api.get<CustomerProps[]>('/customers')
    return response.data;

  } 

    // getCustomer.ts
/* export async function getCustomer(): Promise<CustomerProps[]> {
  const res = await fetch(`${process.env.BASE_URL}/customers`, {
    next: { tags: ['customers'] }, // ✅ essa tag será revalidada quando necessário
  })
  const data = await res.json();
  return data as CustomerProps[];
} */
