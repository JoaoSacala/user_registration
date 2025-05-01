'use client'

import { FiTrash } from "react-icons/fi"
import { deleteCustomer } from '../routes/deleteCustomer'

export function DeleteButton({ id }: { id: string }) {
  return (
    <form action={deleteCustomer}>
      <input type="hidden" name="id" value={id} />
      <button
        type="submit"
        className="bg-red-500 w-7 h-7 flex items-center justify-center rounded-lg absolute right-0 -top-2"
        aria-label="Delete client"
      >
        <FiTrash size={18} color="#fff" />
      </button>
    </form>
  )
}
