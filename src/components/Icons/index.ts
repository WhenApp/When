import { default as IconPlus } from './IconPlus';
import { default as IconReset } from './IconReset';
import { default as IconTrash } from './IconTrash';
import { IconProps } from './StyledIcon';
export type { IconProps } from './StyledIcon';
export { StyledIconContainer } from './StyledIcon';

interface Icons {
  [index: string]: React.NamedExoticComponent<IconProps>;
}

const icons: Icons = {
  IconPlus,
  IconReset,
  IconTrash,
};

export default icons;
