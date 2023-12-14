import { app } from "@/app";
import { PORT } from "@/config";
import { makeHealthRouter } from "@/factories";
import { httpErrorHandler, notFoundHandler } from "@/middleware";

main();

async function main(): Promise<void> {
  const healthRouter = makeHealthRouter();

  healthRouter.setup(app);
  app.use("*", notFoundHandler);
  app.use(httpErrorHandler);

  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });
}
