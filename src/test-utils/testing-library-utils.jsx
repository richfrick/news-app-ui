import { render } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { TestUserProvider } from '../contexts/User';

export function renderWithProviders(
  ui,
  {
    loggedInUser,
    route = '/',
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
            <Route path={path} element={children} />
          </Routes>
        </MemoryRouter>
      ) : (
        <MemoryRouter initialEntries={[route]}>{children}</MemoryRouter>
      )}
    </TestUserProvider>
  );
  return render(ui, { wrapper: Wrapper, ...renderOptions });
}

// re-export everything
export * from '@testing-library/react';

// override render method
export { renderWithProviders as render };
