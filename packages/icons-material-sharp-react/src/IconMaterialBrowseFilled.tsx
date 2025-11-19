import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBrowseFilled = (props: IIcon) => {

  return (
    <Icon
      name='BrowseFilled'

      short_name='Browse'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-120v-240h320v240H120Zm400 0v-400h320v400H520ZM120-440v-400h320v400H120Zm400-160v-240h320v240H520Z"/>
    </Icon>
  );
};

IconMaterialBrowseFilled.displayName = 'OnesyIconMaterialBrowseFilled';

export default IconMaterialBrowseFilled;
