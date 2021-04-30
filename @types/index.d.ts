// Declares SVG as a type to allow to be imported without TS error
declare module '*.svg' {
  const content: React.FC<React.SVGProps<SVGSVGElement>>;
  export default content;
}
