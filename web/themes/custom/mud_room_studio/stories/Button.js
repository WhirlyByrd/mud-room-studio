export const createButton = ({
  variant = 'primary',
  label,
  disabled = false,
  onClick,
}) => {
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.disabled = disabled;
  btn.innerText = label;
  btn.addEventListener('click', onClick);

  btn.className = `btn btn-${variant}`;

  return btn;
};
