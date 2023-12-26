import { HealthRouter } from "@/modules/health";
import { buyGetHealthController } from "@/store/health";

const getHealthController = buyGetHealthController();
const healthRouter = new HealthRouter(getHealthController);
export const buyHealthRouter = () => healthRouter;
