import { DeleteButton } from './_components/DeleteButton'
import { createCustomer } from './routes/createCustomer'
import { getCustomer } from './routes/getCustomer'


export default async function Home() {
  // Fetch data from external API
  const customers = await getCustomer()
  return (
    <div className=" w-full min-h-screen bg-gray-900 flex justify-center">
      <main className="my-10 w-full md:max-w-2xl">
        <h1 className="text-4xl font-medium text-white">Clientes</h1>
        <form action={createCustomer} className="flex flex-col gap-4 mt-10">
    
            <label htmlFor="name" className="text-white font-semibold">
              Nome:
            </label>
            <input
              name="name"
              type="text"
              id="name"
              className="p-2 rounded bg-gray-800 text-white"
            />
            <label htmlFor="email" className="text-white font-semibold">
              Email:
            </label>
            <input
              name="email"
              type="email"
              id="email"
              className="p-2 rounded bg-gray-800 text-white"
            />
          
          <input type="submit" value="cadastrar" className="cursor-pointer mt-4 bg-green-400 font-semibold text-white p-2 rounded"  />
        </form>

        <section className="flex flex-col gap-4 mt-10">
          <h2 className="text-2xl font-medium text-white">Lista de Clientes</h2>

          {customers.map((customer) => (
            <article key={customer.id} className="w-full bg-white rounded p-4 relative hover:scale-105 transition-all duration-200">
            <p><span className="font-medium">Nome:</span>{customer.name}</p>
            <p><span className="font-medium">Email:</span>{customer.email}</p>
            <p><span className="font-medium">Status:</span>{customer.status}</p>
            <DeleteButton id={customer.id} />
          </article>
          ))}
        </section>
      </main>
    </div>
  )
}