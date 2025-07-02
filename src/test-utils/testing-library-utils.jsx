import { render } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { UserProvider } from '../contexts/User';

export function renderWithProviders(
  ui,
  { route = '/', path = '/', withRoutes = false, ...renderOptions } = {}
) {
  const Wrapper = ({ children }) => (
    <UserProvider>
      {withRoutes ? (
        <MemoryRouter initialEntries={[route]}>
          <Routes>
            <Route path={path} element={children} />
          </Routes>
        </MemoryRouter>
      ) : (
        <MemoryRouter initialEntries={[route]}>{children}</MemoryRouter>
      )}
    </UserProvider>
  );
  return render(ui, { wrapper: Wrapper, ...renderOptions });
}

// re-export everything
export * from '@testing-library/react';

// override render method
export { renderWithProviders as render };
