interface CustomerProps {
    name: string
    email: string
    status: string
    id: string
  }
  
export async function getCustomer(): Promise<CustomerProps[]> {

    const response = await fetch(`${process.env.BASE_URL}/customers`, {
      next: { tags: ['customers'] },
    })
    const data = await response.json();
    return data as CustomerProps[];

  } 

    // getCustomer.ts
/* export async function getCustomer(): Promise<CustomerProps[]> {
  const res = await fetch(`${process.env.BASE_URL}/customers`, {
    next: { tags: ['customers'] }, // ✅ essa tag será revalidada quando necessário
  })
  const data = await res.json();
  return data as CustomerProps[];
} */
