import React from 'react';
import { screen } from '@testing-library/react';

import BoardgamesManager from './BoardgamesManager';
import { setup } from '../../test/testUtils';

const getTitleInput = () => screen.getByLabelText('Title');
const getMinPlayersInput = () => screen.getByLabelText('Minimum players');
const getMaxPlayersInput = () => screen.getByLabelText('Maximum players');
const getSubmitButton = () => screen.getByRole('button', { name: 'Add' });

describe('BoardgamesManager', () => {
  it('displays the placeholder and an empty form by default', () => {
    setup(<BoardgamesManager />);

    expect(screen.getByText(/The list is empty./)).toBeVisible();
    expect(getTitleInput()).toBeVisible();
    expect(getMinPlayersInput()).toBeVisible();
    expect(getMaxPlayersInput()).toBeVisible();
    expect(getSubmitButton()).toBeVisible();
  });

  it('manages the boardgame list', async () => {
    const { view } = setup(<BoardgamesManager />);

    await view.type(getTitleInput(), 'Foo');
    await view.type(getMinPlayersInput(), '2');
    await view.type(getMaxPlayersInput(), '4');
    await view.click(getSubmitButton());

    expect(await screen.findByText('Foo')).toBeVisible();

    await view.click(screen.getByRole('button', { name: 'Delete' }));

    expect(screen.queryByText('Foo')).toBeNull();
  });
});
