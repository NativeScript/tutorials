import { DetailsViewModel } from './details-view-model'

export function navigatingTo(args) {
  const page = args.object
  page.bindingContext = new DetailsViewModel(page.navigationContext)
}