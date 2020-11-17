import React, { ComponentProps } from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import { action } from '@storybook/addon-actions';
import { withKnobs, text } from '@storybook/addon-knobs';
import { Button, ButtonProps } from '../components/Button';
import Theme from '../themes/Theme';
import { ThemeConsumer } from 'styled-components';
import lightTheme from '../themes/lightTheme';

export default {
  title: 'Button',
  component: Button,
  decorators: [withKnobs],
} as Meta;

const Template: Story<ButtonProps & { theme: Theme }> = (args) => (
  <Button {...args} />
);

export const Action = () => (
  <div className='m-2'>
    <Button
      theme={lightTheme}
      title={text('Button title', 'Login')}
      role='action'
      onClick={action('button-click')}
    />
  </div>
);

export const SecondaryAction = () => (
  <div className='m-2'>
    <Button
      theme={lightTheme}
      title={text('Button title', 'Login')}
      role='secondaryAction'
      onClick={action('button-click')}
    />
  </div>
);
