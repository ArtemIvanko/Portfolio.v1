type SvgComponent = React.FunctionComponent<React.SVGProps<SVGSVGElement>>;

declare module "*.svg" {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default content;
}

declare module "*.png" {
  const pngSrc: string;
  export default pngSrc;
}

declare module "*.jpg" {
  const jpgSrc: string;
  export default jpgSrc;
}

declare module "*.jpeg" {
  const jpegSrc: string;
  export default jpegSrc;
}

declare module "*.pdf" {
  const pdfSrc: string;
  export default pdfSrc;
}
