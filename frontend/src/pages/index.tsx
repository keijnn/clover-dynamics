//import modules
import { createHistoryRouter } from 'atomic-router'
import { createRoutesView, RouterProvider } from 'atomic-router-react'
import { BrowserHistory, createBrowserHistory } from 'history'

//import pages
import { HomePage } from './home'
import { NotFoundPage } from './not-found'
import { SourceCodePage } from './source-code'
import { TablesPage } from './tables'

export const Routing = () => {
  const routes = [
    { path: '/', route: HomePage.route, view: HomePage.Page },
    { path: '/tables', route: TablesPage.route, view: TablesPage.Page },
    { path: '/source-code', route: SourceCodePage.route, view: SourceCodePage.Page },
  ]

  const router = createHistoryRouter({ routes })

  const history = createBrowserHistory()

  router.setHistory(history)

  const RoutesView = createRoutesView({
    routes: routes,
    otherwise: () => <NotFoundPage.Page />,
  })

  return (
    <RouterProvider router={router}>
      <RoutesView />
    </RouterProvider>
  )
}
