import App from "./App"
import Error from "./Pages/Error"
import List from "./Pages/List"
import Form from "./Pages/Form"

const routes = [
    {
      path: '/',
      element: <App />,
      errorElement: <Error />,
      children: [
        { index: true, element: <List /> }, 
        { path: 'form', element: <Form /> }
      ]
    }
  ];

export default routes