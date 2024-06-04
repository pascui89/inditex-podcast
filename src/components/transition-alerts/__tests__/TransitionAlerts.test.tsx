import React from 'react';
import TransitionAlerts from '../TransitionAlerts';
import { render, fireEvent, waitFor } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";

global.React = React;

describe('TransitionAlerts', () => {
  test('renders alert message with provided severity and text', () => {
    const severity = 'success';
    const text = 'This is a success message';

    const wrapper = render(<TransitionAlerts severity={severity} text={text} />);

    const alertElement = wrapper.getByText(text);
    expect(alertElement).toBeInTheDocument();
    expect(alertElement).toHaveClass('MuiAlert-message');
  });

  test('closes alert message when close button is clicked', () => {
    const severity = 'success';
    const text = 'This is a success message';

    const { queryByRole, getByLabelText } = render(
      <TransitionAlerts severity={severity} text={text} />
    );

    // Verificar que el mensaje de alerta esté inicialmente abierto
    const alertElement = queryByRole('alert');
    expect(alertElement).toBeInTheDocument();

    // Hacer clic en el botón de cierre
    const closeButton = getByLabelText('close');
    fireEvent.click(closeButton);

    // Esperar a que el mensaje de alerta se cierre
    return waitFor(() => {
      // Verificar que el mensaje de alerta ya no esté presente en el DOM
      const closedAlertElement = queryByRole('alert');
      expect(closedAlertElement).toBeNull();
    });
  });
});
