import { Observable } from "@nativescript/core";
import { FlickModel } from "../models";

export class DetailsViewModel extends Observable {
  constructor(private _context: { flick: FlickModel }) {
    super();
  }

  get flick(): FlickModel {
    return this._context.flick;
  }
}
