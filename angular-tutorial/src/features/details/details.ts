import { Component, OnInit, inject, NO_ERRORS_SCHEMA } from "@angular/core";
import { ActivatedRoute } from '@angular/router';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular'
import { FlickService } from "~/core/services/flick.service";
import { FlickModel } from "~/core/models/flick.model";

@Component({
  selector: "ns-details",
  templateUrl: "details.html",
  imports: [NativeScriptCommonModule, NativeScriptRouterModule],
  schemas: [NO_ERRORS_SCHEMA],
})
export class Details implements OnInit {
  flickService = inject(FlickService);
  activatedRoute = inject(ActivatedRoute);
  flick: FlickModel | undefined = undefined;

  ngOnInit(): void {
    const id = +this.activatedRoute.snapshot.params.id;
    if (id) {
      this.flick = this.flickService.getFlickById(id);
    }
  }
}
