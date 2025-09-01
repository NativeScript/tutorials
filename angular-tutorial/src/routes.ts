import { Routes } from "@angular/router";

export const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  {
    path: "home",
    loadComponent: () => import("./features/home/home").then((m) => m.Home),
  },
  {
    path: "details/:id",
    loadComponent: () =>
      import("./features/details/details").then((m) => m.Details),
  },
];
