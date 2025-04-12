import dotenv from "dotenv";

dotenv.config();

type ServerConfig = {
	PORT: string;
	NODE_ENV: string;
	API_VERSION: string;
};

export const config = {
	PORT: process.env.PORT,
	API_VERSION: process.env.API_VERSION,
	NODE_ENV: process.env.NODE_ENV,
};
