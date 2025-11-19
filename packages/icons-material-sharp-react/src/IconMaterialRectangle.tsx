import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRectangle = (props: IIcon) => {

  return (
    <Icon
      name='Rectangle'

      short_name='Rectangle'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-160v-640h800v640H80Zm80-80h640v-480H160v480Zm0 0v-480 480Z"/>
    </Icon>
  );
};

IconMaterialRectangle.displayName = 'OnesyIconMaterialRectangle';

export default IconMaterialRectangle;
