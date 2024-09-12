import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ContactPage from '../../src/ContactPage';

describe('Contact testid', () => {
  test('Pealkiri kuvatakse õigesti', () => {
    render(<ContactPage />);
    const header = screen.getByRole('heading', { name: /Contact Us/i });
    expect(header).toBeInTheDocument();
  });

  test('Navigeerimislingid on õigesti seadistatud', () => {
    render(<ContactPage />);
    const links = screen.getAllByText(/Home|About|Contact/i);
    expect(links).toHaveLength(4);
  
    const [rootLink, homeLink, aboutLink, contactLink] = links;
  
    expect(rootLink.getAttribute('href')).toBeNull();
    expect(homeLink).toHaveAttribute('href', 'homepage.html');
    expect(aboutLink).toHaveAttribute('href', 'about.html');
    expect(contactLink).toHaveAttribute('href', 'contact.html');
  });  

  test('Vormi väljad on õigesti kuvatud', () => {
    render(<ContactPage />);
    expect(screen.getByLabelText(/Name:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Message:/i)).toBeInTheDocument();
  });

  test('Kõik vormi väljad on nõutavad', () => {
    render(<ContactPage />);
    expect(screen.getByLabelText(/Name:/i)).toBeRequired();
    expect(screen.getByLabelText(/Email:/i)).toBeRequired();
    expect(screen.getByLabelText(/Message:/i)).toBeRequired();
  });

  test('Esitamisnupp on olemas ja sisaldab õiget teksti', () => {
    render(<ContactPage />);
    const submitButton = screen.getByRole('button', { name: /Send Message/i });
    expect(submitButton).toBeInTheDocument();
  });
});