import { Router } from "express";

import CreateUserService from "../services/CreateUserService";

const usersRouter = Router();
// const appointmentsRepository = new AppointmentsRepository();

usersRouter.post("/", async (request, response) => {
	try {
		const { name, email, password } = request.body;

		const createUSer = new CreateUserService();

		const user = await createUSer.execute({
			name,
			email,
			password,
		});

		const userWithoutPassword = {
			id: user.id,
			name: user.name,
			email: user.email,
			created_at: user.created_at,
			updated_at: user.updated_at,
		};

		return response.json(userWithoutPassword);
	} catch (err) {
		return response.status(400).json({ error: err.message });
	}
});

export default usersRouter;
