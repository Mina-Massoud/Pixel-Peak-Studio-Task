import React, { useCallback, useEffect, useState } from "react";
import NextArrow from "../../../Icons/Arrows/popularTown/NextArrow";
import PrevArrow from "../../../Icons/Arrows/popularTown/PrevArrow";

export const usePrevNextButtons = (emblaApi) => {
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
  }, [emblaApi]);

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback((emblaApi) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect(emblaApi);
    emblaApi.on("reInit", onSelect);
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  return {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  };
};

export const PrevButton = (props) => {
  const { children, ...restProps } = props;

  return (
    <PrevArrow
      className="left-0 absolute"
      width={10}
      height={10}
      {...restProps}
    />
  );
};

export const NextButton = (props) => {
  const { children, ...restProps } = props;

  return (
    <NextArrow
      className="right-0 absolute"
      width={10}
      height={10}
      {...restProps}
    />
  );
};
