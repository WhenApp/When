import * as React from 'react';
import { useSpring, animated, to } from 'react-spring';
import { useGesture } from 'react-with-gesture';
import tw, { css, styled } from 'twin.macro';

// these 'any' types are gross, but I can't figure out how to type these and TS complains if I try to let it infer...
export const SwipeableContainer: React.FC<any> = styled(animated.div)(() => [
  tw`relative flex-grow h-24 px-4 rounded-md select-none`,
  css`
    transform-origin: 50% 50% 0px;
    box-sizing: border-box;
    display: grid;
    align-items: center;
    text-align: center;
  `,
]);
export const IconContainer: React.FC<any> = styled(animated.div)(() => [
  tw`w-12 h-12`,
]);
export const DefaultIcon = styled.div(() => [
  tw`w-full h-full bg-white rounded-full`,
]);
export const ForegroundContainer: React.FC<any> = styled(animated.div)(() => [
  tw`absolute items-center justify-center w-full h-full`,
  css`
    cursor: grab;

    &:active {
      cursor: grabbing;
    }
  `,
]);

export interface Props {
  iconLeft?: any;
  iconRight?: any;
  bgLeft?: string;
  bgRight?: string;
  onSwipeLeft?: (reset: () => void) => void;
  onSwipeRight?: (reset: () => void) => void;
}

export const Swipeable: React.FC<Props> = ({
  bgLeft = '#F00',
  bgRight = '#0F0',
  children,
  iconLeft,
  iconRight,
  onSwipeLeft = () => {},
  onSwipeRight = () => {},
}) => {
  const [xOverride, setXOverride] = React.useState(0);
  const [isInteractable, setIsInteractable] = React.useState(true);
  const elemRef = React.useRef<HTMLDivElement>(null);
  const [bind, { delta, down }] = useGesture();
  const { x, bg, size } = useSpring({
    x: xOverride !== 0 ? xOverride : down ? delta[0] : 0,
    bg: delta[0] < 0 ? bgRight : bgLeft,
    size: down ? 1.05 : 1.01,
    immediate: name => down && name === 'x',
  });

  const avSize = x.to({
    map: Math.abs,
    range: [50, 200],
    output: ['scale(0.5)', 'scale(1)'],
    extrapolate: 'clamp',
  });

  const reset = () => {
    setIsInteractable(true);
    setXOverride(0);
  };

  React.useEffect(() => {
    if (!elemRef.current || delta[0] === 0) {
      return;
    }

    const width = elemRef.current.offsetWidth;

    if (!down) {
      const shouldSwipe = Math.abs(delta[0]) >= width / 3;

      if (shouldSwipe) {
        const swipeDirection = delta[0] > 0 ? 'right' : 'left';
        setIsInteractable(false);

        if (swipeDirection === 'right') {
          setXOverride(width * 2);
          onSwipeRight(reset);
        } else {
          setXOverride(width * -2);
          onSwipeLeft(reset);
        }
      }
    }
  }, [
    down,
    delta,
    elemRef.current,
    onSwipeRight,
    onSwipeLeft,
    setIsInteractable,
    setXOverride,
  ]);

  const IconLeft = iconLeft ? iconLeft : DefaultIcon;
  const IconRight = iconRight ? iconRight : DefaultIcon;
  const Icon = delta[0] < 0 ? IconRight : IconLeft;

  return (
    <SwipeableContainer
      {...bind()}
      style={{
        background: bg,
        pointerEvents: isInteractable ? 'auto' : 'none',
      }}
    >
      <IconContainer
        style={{
          transform: avSize,
          justifySelf: delta[0] < 0 ? 'end' : 'start',
        }}
      >
        <Icon />
      </IconContainer>
      <ForegroundContainer
        ref={elemRef}
        style={{
          transform: to(
            [x, size],
            (x, s) => `translate3d(${x}px,0,0) scale(${s})`,
          ),
        }}
      >
        <span>{children}</span>
      </ForegroundContainer>
    </SwipeableContainer>
  );
};
