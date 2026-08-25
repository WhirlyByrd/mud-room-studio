export const createTag = ({
    variant = 'accent',
    label,
}) => {
    const tag = document.createElement('span');
    tag.innerText = label;

    tag.className = `tag tag-${variant}`;


    return tag;
};