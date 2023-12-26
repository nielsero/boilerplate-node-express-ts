import { app } from "@/app";
import { PORT } from "@/config/constants";
import { errorHandler, notFoundHandler, requestLogger } from "@/middleware";
import { logger } from "@/utils/logger";
import { buyHealthRouter } from "@/store/health";

main();

async function main(): Promise<void> {
  const healthRouter = buyHealthRouter();
  app.use(requestLogger);
  healthRouter.setup(app);
  app.use("*", notFoundHandler);
  app.use(errorHandler);
  app.listen(PORT, () => {
    logger.info(`[main] Server running at http://localhost:${PORT}`);
  });
}
