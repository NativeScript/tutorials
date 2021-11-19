import { Observable } from "@nativescript/core";
import { FlickService } from "../services";
import { FlickModel } from "../models";

export class DetailsViewModel extends Observable {
  private _flick: FlickModel;
  constructor(private _context: { flickId: number }) {
    super();

    this._flick = FlickService.getInstance().getFlickById(
      this._context.flickId
    );
  }

  get flick(): FlickModel {
    return this._flick;
  }
}
