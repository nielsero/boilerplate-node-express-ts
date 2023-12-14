import { app } from "@/app";
import { PORT } from "@/config";
import { makeHealthRouter } from "@/factories";

main();

async function main(): Promise<void> {
  const healthRouter = makeHealthRouter();

  healthRouter.setup(app);

  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });
}
