// app/home/home-page.js

import { HomeViewModel } from './home-view-model'

export function navigatingTo(args) {
  if (args.isBackNavigation) {
    return
  }

  const page = args.object
  page.bindingContext = new HomeViewModel()
}