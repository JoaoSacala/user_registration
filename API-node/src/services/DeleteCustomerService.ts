import prismaClient  from "../prisma";

interface IDeleteCustomerRequest {
	id: string;
}

class DeleteCustomerService {
	async execute({id}: IDeleteCustomerRequest) {
		if (!id) {
			throw new Error("ID is required.");
		}
		// Check if the customer exists
		const findCustomer = await prismaClient.customer.findUnique({
			where: { id: id },
		});

		if (!findCustomer) {
			throw new Error("Customer not found");
		}

		// Delete the customer
		await prismaClient.customer.delete({
			where: { id: findCustomer.id },
		});

        return { message: "Customer deleted successfully" };
	}
}


export { DeleteCustomerService };