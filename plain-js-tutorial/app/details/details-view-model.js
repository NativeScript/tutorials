// app/details/details-view-model.js

import { Observable } from '@nativescript/core'
import { FlickService } from '../services/flick.service'

// Add the contents of HomeViewModel class 👇
export class DetailsViewModel extends Observable {
  #flick

  // the passed in context object during the navigation will be here
  constructor(_context) {
    super()

    this.#flick = FlickService.getInstance().getFlickById(_context.flickId)
  }

  get flick() {
    return this.#flick
  }
}