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
    const form = returnButton.closest('form');
    expect(form).toHaveAttribute('action', 'homepage.html');
  });

  test('Lehe sisu on õigesti tõlgendatud', () => {
    render(<ContactedPage />);
    const paragraph = screen.getByText(/We received your message\/feedback and will contact you via email so stay tuned./i);
    expect(paragraph).toBeInTheDocument();
  });

  test('Navigeerimislingid on õigesti seadistatud', () => {
    render(<ContactedPage />);
    const links = screen.getAllByText(/Home|About|Contact/i);
    expect(links).toHaveLength(5);
  
    const [rootLink, homeLink, aboutLink, contactLink] = links;
    
    expect(rootLink.getAttribute('href')).toBeNull();
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