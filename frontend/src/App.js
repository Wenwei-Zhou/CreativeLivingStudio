import { BrowserRouter, Routes, Route } from 'react-router';
import { routes } from './Routes/Routes';
import './App.css';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      {routes.map((route, index) => (
        <Route key={index} path={route.path} element={route.element} />
      ))}
      {/* {routes.map((route, index) => {
        const {path, element} = route;
        return (
          <Route key={index} path={path} element={element}>
            {children &&
            children.map((child, childIndex) => (
              <Route
              key={childIndex}
              path={child.path}
              element={child.element}
              />
            ))}
          </Route>
        )
      })} */}
    </Routes>
    </BrowserRouter>
  );
}

export default App;
