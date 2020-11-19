import * as React from 'react';

export type ImageFit = 'contain' | 'cover' | 'tile' | 'none';

export interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  dataHook?: string;
  className?: string;
  fit?: ImageFit;
  position?: string;
}

declare const Image: React.FC<ImageProps>;
export default Image;
