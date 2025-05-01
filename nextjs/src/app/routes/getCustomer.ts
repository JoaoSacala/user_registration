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