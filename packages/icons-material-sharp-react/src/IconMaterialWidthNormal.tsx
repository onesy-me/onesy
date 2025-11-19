import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWidthNormal = (props: IIcon) => {

  return (
    <Icon
      name='WidthNormal'

      short_name='WidthNormal'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-160v-640h800v640H80Zm80-80h160v-480H160v480Zm240 0h160v-480H400v480Zm240 0h160v-480H640v480ZM400-720v480-480Z"/>
    </Icon>
  );
};

IconMaterialWidthNormal.displayName = 'OnesyIconMaterialWidthNormal';

export default IconMaterialWidthNormal;
