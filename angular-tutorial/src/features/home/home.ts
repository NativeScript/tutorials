import { Component, NO_ERRORS_SCHEMA, inject } from "@angular/core";
import {
  NativeScriptCommonModule,
  NativeScriptRouterModule,
  RouterExtensions,
} from "@nativescript/angular";
import { ItemEventData } from "@nativescript/core";
import { FlickService } from "~/core/services/flick.service";

@Component({
  selector: "ns-home",
  templateUrl: "home.html",
  imports: [NativeScriptCommonModule, NativeScriptRouterModule],
  schemas: [NO_ERRORS_SCHEMA],
})
export class Home {
  flickService = inject(FlickService);
  router = inject(RouterExtensions);

  onFlickTap(args: ItemEventData): void {
    this.router.navigate([
      "details",
      this.flickService.getFlicks()[args.index].id,
    ]);
  }

  onItemLoading(args: ItemEventData) {
    // Optional learning: you can even use platform APIs to customize 
    // fine level details and behavior.
    if (__APPLE__) {
      const iosCell = args.ios as UITableViewCell;
      if (iosCell) {
        iosCell.selectionStyle = UITableViewCellSelectionStyle.None;
      }
    } else {
      const androidListView = args.android as android.widget.ListView;
      if (androidListView) {
        androidListView.setSelector(
          new android.graphics.drawable.StateListDrawable()
        );
      }
    }
  }
}
