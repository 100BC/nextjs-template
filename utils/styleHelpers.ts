export const conditional = (
  condition: boolean,
  className: string,
  className2?: string
) => {
  return condition ? className : className2;
};

export const combine = (...classNames: (string | undefined)[]) => {
  return [...classNames].join(' ');
};
