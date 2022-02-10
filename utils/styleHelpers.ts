export const conditional = (
  condition: boolean,
  className: string | undefined,
  className2?: string | undefined
) => {
  return condition ? className : className2;
};

export const combine = (...classNames: (string | undefined)[]) => {
  return [...classNames].join(' ');
};
