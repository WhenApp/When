import * as React from 'react';
import { useSpring, animated, to } from 'react-spring';
import { useGesture } from 'react-with-gesture';
import tw, { css, styled } from 'twin.macro';

// these 'any' types are gross, but I can't figure out how to type these and TS complains if I try to let it infer...
export const SwipeableContainer: React.VFC<any> = styled(animated.div)(() => [
  tw`relative flex-grow h-24 px-4 rounded-md select-none`,
  css`
    transform-origin: 50% 50% 0px;
    box-sizing: border-box;
    display: grid;
    align-items: center;
    text-align: center;
  `,
]);
export const IconContainer: React.VFC<any> = styled(animated.div)(() => [
  tw`w-16 h-16`,
]);
export const DefaultIcon = styled.div(() => [
  tw`w-full h-full bg-white rounded-full`,
]);
export const ForegroundContainer: React.VFC<any> = styled(animated.div)(() => [
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
}

export const Swipeable: React.FC<Props> = ({
  bgLeft = '#F00',
  bgRight = '#0F0',
  children,
  iconLeft,
  iconRight,
}) => {
  const [bind, { delta, down }] = useGesture();
  const { x, bg, size } = useSpring({
    x: down ? delta[0] : 0,
    bg: delta[0] < 0 ? bgRight : bgLeft,
    size: down ? 1 : 1.01,
    immediate: name => down && name === 'x',
  });

  const avSize = x.to({
    map: Math.abs,
    range: [50, 300],
    output: ['scale(0.5)', 'scale(1)'],
    extrapolate: 'clamp',
  });

  const IconLeft = iconLeft ? iconLeft : DefaultIcon;
  const IconRight = iconRight ? iconRight : DefaultIcon;
  const Icon = delta[0] < 0 ? IconRight : IconLeft;

  return (
    <SwipeableContainer {...bind()} style={{ background: bg }}>
      <IconContainer
        style={{
          transform: avSize,
          justifySelf: delta[0] < 0 ? 'end' : 'start',
        }}
      >
        <Icon />
      </IconContainer>
      <ForegroundContainer
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
