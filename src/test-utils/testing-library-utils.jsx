import { render } from '@testing-library/react';
import { UserContext, UserProvider } from '../contexts/User';

const renderWithContext = (ui, options) =>
  render(ui, { wrapper: UserProvider, ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export { renderWithContext as render };
