import React from "react";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "./WidgetArrowButtons";
import useEmblaCarousel from "embla-carousel-react";

const WidgetSlider = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  if (!props.styles || !props.children) {
    return null;
  }

  return (
    <section className={`${props.styles["embla"]} relative`}>
      <div className={props.styles["embla__viewport"]} ref={emblaRef}>
        <div className={props.styles["embla__container"]}>{props.children}</div>
      </div>

      <div className={`w-full full-center`}>
        <div>
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>
    </section>
  );
};

export default WidgetSlider;
