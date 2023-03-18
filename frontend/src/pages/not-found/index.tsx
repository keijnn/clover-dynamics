//import modules
import { createRoute } from 'atomic-router'

const route = createRoute()

const Page = () => {
  return <>Page not found!</>
}

export const NotFoundPage = {
  route,
  Page,
}
