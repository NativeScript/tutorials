// app/home/home-view-model.js

// Update this 👇
import { Frame, Observable, ObservableArray } from '@nativescript/core'
import { FlickService } from '../services/flick.service'

// Add the contents of HomeViewModel class 👇
export class HomeViewModel extends Observable {
  #flicks;

  constructor() {
    super()
    this.populateFlicks()
  }

  // this will be used as the data source of our ListView
  get flicks() {
    return new ObservableArray(this.#flicks)
  }

  populateFlicks() {
    this.#flicks = FlickService.getInstance().getFlicks();
  }

  // Add this 👇
  onFlickTap(args) {
    Frame.topmost().navigate({
      moduleName: 'details/details-page',
      context: { flickId: this.#flicks[args.index].id }
    })
  }
}