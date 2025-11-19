import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRectangleW100 = (props: IIcon) => {

  return (
    <Icon
      name='RectangleW100'

      short_name='Rectangle'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-212v-536h696v536H132Zm28-28h640v-480H160v480Zm0 0v-480 480Z"/>
    </Icon>
  );
};

IconMaterialRectangleW100.displayName = 'OnesyIconMaterialRectangleW100';

export default IconMaterialRectangleW100;
