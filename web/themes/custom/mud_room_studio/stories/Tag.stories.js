import {createTag} from './Tag';

export default {
    title: 'Example/Tag',
    tags: ['autodocs'],
    render: ({ variant, label, ...args }) => createTag({ variant, label, ...args }),
    argTypes: {
        label: {control: 'text'},
        variant: {
            control: {type: 'select'},
            options: ['accent', 'accent-2', 'neutral', 'outline' ]
        },
    },
};

export const Accent = {
    args: {variant: 'accent', label: 'Accent Tag'},
};

export const Accent2 = {
    args: {variant: 'accent-2', label: 'Accent 2 Tag'},
};

export const Neutral = {
    args: {variant: 'neutral', label: 'Neutral Tag'},
};

export const Outline = {
    args: {variant: 'outline', label: 'Outline Tag'},
};