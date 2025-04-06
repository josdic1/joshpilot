import App from "./App"
import Error from "./Pages/Error"
import List from "./Pages/List"

const routes = [
    {
        path: '/',
        element: <App />,
        errorElement: <Error />,
        children: [
            { path: 'list', element: <List />}
        ]
    }
]

export default routes