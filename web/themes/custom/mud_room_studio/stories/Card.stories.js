import {createCard} from './Card';

export default {
    title: 'Example/Card',
    tags: ['autodocs'],
    render: ({ kicker, title, body, meta, ...args }) => createCard({ kicker, title, body, meta, ...args }),
    argTypes: {
        kicker: {control: 'text'},
        title: {control: 'text'},
        body: {control: 'text'},
        meta: {control: 'text'},
        elevation: {
            control: {type: 'select'},
            options: ['sm', 'md', 'lg'],
        },
    },
    args: {elevation: 'sm'},
};

export const sm = {
    args: {elevation: 'sm', kicker: 'Kicker', title: 'Card Title', body: 'This is the body of the card. It can contain text, images, or other content.', meta: 'Meta information'},
};

export const md = {
    args: {elevation: 'md', kicker: 'Kicker', title: 'Card Title', body: 'This is the body of the card. It can contain text, images, or other content.', meta: 'Meta information'},
};

export const lg = {
    args: {elevation: 'lg', kicker: 'Kicker', title: 'Card Title', body: 'This is the body of the card. It can contain text, images, or other content.', meta: 'Meta information'},
};