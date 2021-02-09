import { default as IconPlus } from './IconPlus';
import { IconProps } from './StyledIcon';
export type { IconProps } from './StyledIcon';
export { StyledIconContainer } from './StyledIcon';

interface Icons {
  [index: string]: React.NamedExoticComponent<IconProps>;
}

const icons: Icons = {
  IconPlus,
};

export default icons;
