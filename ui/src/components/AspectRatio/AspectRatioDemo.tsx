import { AspectRatio } from "./AspectRatio";

import { ImgHTMLAttributes } from "react";

interface AspectRatioDemoProps extends ImgHTMLAttributes<HTMLImageElement> {
  ratio?: any;
  src?: string;
  alt?: string;
  classNameContainer?: string;
  classNameImage?: string;
}

export const AspectRatioDefault: React.FC<AspectRatioDemoProps> = ({
  ratio = 10 / 9,
  classNameContainer = "bg-muted",
  classNameImage = "h-full w-full rounded-md object-cover shadow-md",
  src = "https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80",
  ...props
}) => {
  return (
    <AspectRatio ratio={ratio} className={classNameContainer}>
      <img src={src} alt={props.alt} className={classNameImage} />
    </AspectRatio>
  );
};
