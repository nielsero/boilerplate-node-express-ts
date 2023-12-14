import { Router } from "express";
import { HealthController } from "@/modules/health";

export class HealthRouter {
  constructor(private readonly controller: HealthController) {}

  setup(router: Router) {
    router.get("/api/health", this.controller.handle.bind(this.controller));
  }
}