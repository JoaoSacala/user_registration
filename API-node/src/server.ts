import fastify from "fastify";
import Cors from "@fastify/cors";
import { routes } from "./routes";

const app = fastify({logger: true});

app.setErrorHandler((error, request, reply) => {
    reply.code(500).send({ error: error.message });
})

  const start = async () => {

    await app.register(Cors, {
        origin: "*",
        methods: ["GET", "POST", "PUT", "DELETE"],
    })
    await app.register(routes)
    
    try {
        await app.listen({ port: 3333 });
    }catch (err) {
        process.exit(1);
    }
  }

  start();