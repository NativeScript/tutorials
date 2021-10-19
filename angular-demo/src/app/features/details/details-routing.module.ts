import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "@nativescript/angular";
import { DetailsComponent } from "./details.component";

export const routes: Routes = [
  {
    path: "",
    component: DetailsComponent
  }
];

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)]
})
export class DetailsRoutingModule {}
