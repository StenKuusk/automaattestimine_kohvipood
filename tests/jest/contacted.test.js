import React from 'react';
import { render, screen } from '@testing-library/react';
import ContactedPage from '../../src/ContactedPage';

describe('Contacted testid', () => {
  test('Sõnum pärast saatmist kuvatakse õigesti', () => {
    render(<ContactedPage />);
    const message = screen.getByRole('heading', { name: /Message sent!/i });
    expect(message).toBeInTheDocument();
  });

  test('Tagasi nupp suunab õigesse kohta', () => {
    render(<ContactedPage />);
    const returnButton = screen.getByRole('button', { name: /Return/i });
    expect(returnButton).toHaveAttribute('formaction', 'homepage.html');
  });

  test('Lehe sisu on õigesti tõlgendatud', () => {
    render(<ContactedPage />);
    const paragraph = screen.getByText(/We received your message\/feedback and will contact you via email so stay tuned./i);
    expect(paragraph).toBeInTheDocument();
  });

  test('Navigeerimislingid on õigesti seadistatud', () => {
    render(<ContactedPage />);
    const homeLink = screen.getByText(/Home/i);
    const aboutLink = screen.getByText(/About/i);
    const contactLink = screen.getByText(/Contact/i);

    expect(homeLink).toHaveAttribute('href', 'homepage.html');
    expect(aboutLink).toHaveAttribute('href', 'about.html');
    expect(contactLink).toHaveAttribute('href', 'contact.html');
  });

  test('Jaluse sisu on korrektne', () => {
    render(<ContactedPage />);
    const footer = screen.getByText(/© 2024 My Coffee Shop. All rights reserved./i);
    expect(footer).toBeInTheDocument();
  });
});