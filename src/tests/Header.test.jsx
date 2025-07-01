import { render, screen } from '../test-utils/testing-library-utils';
import Header from '../components/Header';

test('Ensure the header image is present', () => {
  render(<Header />);

  const image = screen.getByAltText('website logo');

  expect(image).toBeVisible();
});

test('Ensure the header text has not changed', async () => {
  render(<Header />);

  const headerText = await screen.findAllByRole('heading');

  expect(headerText.length).toBe(3);
  expect(headerText[0]).toHaveTextContent('Welcome to Elaborate-Snickerdoodle');
  expect(headerText[1]).toHaveTextContent(
    'Home to the most takled about articles on the web'
  );
  expect(headerText[2]).toHaveTextContent(
    "so long as it's football, coding or cooking"
  );
});

test('Ensure the current logged in username displays properly', () => {
  // TODO update test to check the user context is used properly. It is currently hardcoded
  render(<Header />);

  const currentUserHeading = screen.getByText('Current User:');
  const currentUser = screen.getByText('tickle122');

  expect(currentUserHeading).toBeVisible();
  expect(currentUser).toBeVisible();
});
