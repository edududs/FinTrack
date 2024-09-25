import { Label } from "../core/Label";
import { Separator } from "../core";
import {
  SimpleCarousel,
  CarouselSpacing,
  CarouselOrientation,
  CarouselSize,
  CarouselDApiDemo,
} from "./Carousel/CarouselDemo";

const DemoCarousels: React.FC = () => {
  return (
    <div>
      <Label className="text-xl justify-center flex mb-3">
        Simple Carousel
      </Label>
      <SimpleCarousel />

      <Separator />

      <Label className="text-xl justify-center flex mb-3">Size Carousel</Label>
      <CarouselSize />

      <Separator />

      <Label className="text-xl justify-center flex mb-3">
        Spacing Carousel
      </Label>
      <CarouselSpacing />

      <Separator />

      <Label className="text-xl justify-center flex mb-3">
        Orientation Carousel
      </Label>
      <CarouselOrientation />

      <Separator />

      <Label className="text-xl justify-center flex mb-3">
        API Controlled Carousel
      </Label>
      <CarouselDApiDemo />
    </div>
  );
};

export default DemoCarousels;
