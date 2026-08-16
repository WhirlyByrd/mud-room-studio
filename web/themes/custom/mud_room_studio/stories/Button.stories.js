import { fn } from 'storybook/test';

import { createButton } from './Button';

export default {
  title: 'Example/Button',
  tags: ['autodocs'],
  render: ({ label, ...args }) => createButton({ label, ...args }),
  argTypes: {
    label: { control: 'text' },
    onClick: { action: 'onClick' },
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'ghost'],
    },
    disabled: { control: 'boolean' },
  },
  args: { onClick: fn() },
};

export const Primary = {
  args: { variant: 'primary', label: 'Browse classes' },
};

export const Secondary = {
  args: { variant: 'secondary', label: 'Our story' },
};

export const Ghost = {
  args: { variant: 'ghost', label: 'View full schedule' },
};

export const Disabled = {
  args: { variant: 'primary', label: 'Reserve', disabled: true },
};