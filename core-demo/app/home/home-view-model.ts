import {
  Frame,
  Observable,
  ObservableArray,
  ItemEventData,
} from "@nativescript/core";
import { FlickModel } from "../models";
import { FlickService } from "../services";

export class HomeViewModel extends Observable {
  private _flicks: FlickModel[];

  constructor() {
    super();
    this.populateFlicks();
  }

  get flicks(): ObservableArray<FlickModel> {
    return new ObservableArray(this._flicks);
  }

  populateFlicks(): void {
    const flickService = new FlickService();
    this._flicks = flickService.getFlicks();
  }

  onFlickTap(args: ItemEventData): void {
    Frame.topmost().navigate({
      moduleName: "details/details-page",
      context: { flick: this._flicks[args.index] },
    });
  }
}
