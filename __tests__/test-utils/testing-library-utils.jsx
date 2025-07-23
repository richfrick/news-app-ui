import { render } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { TestUserProvider } from '../../src/contexts/User';

export function renderWithProviders(
  ui,
  {
    loggedInUser,
    route = '/',
    routes = [],
    path = '/',
    withRoutes = false,
    ...renderOptions
  } = {}
) {
  const Wrapper = ({ children }) => (
    <TestUserProvider loggedInUser={loggedInUser}>
      {withRoutes ? (
        <MemoryRouter initialEntries={[route]}>
          <Routes>
            {routes.length > 0 ? (
              routes.map(({ path, element }) => (
                <Route key={path} path={path} element={element} />
              ))
            ) : (
              <Route path={path} element={children} />
            )}
          </Routes>
        </MemoryRouter>
      ) : (
        <MemoryRouter initialEntries={[route]}>{children}</MemoryRouter>
      )}
    </TestUserProvider>
  );
  return render(ui, { wrapper: Wrapper, ...renderOptions });
}

export * from '@testing-library/react';

export { renderWithProviders as render };
