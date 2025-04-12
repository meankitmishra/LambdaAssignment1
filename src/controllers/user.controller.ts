import { Request, Response } from "express";

async function getUser(req: Request, res: Response) {
	res.status(200).json({ message: "User route works!" });
}

export const userController = {
	getUser,
};
