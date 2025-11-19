import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWidthFull = (props: IIcon) => {

  return (
    <Icon
      name='WidthFull'

      short_name='WidthFull'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-160v-640h800v640H80Zm80-80h40v-480h-40v480Zm120 0h400v-480H280v480Zm480 0h40v-480h-40v480ZM280-720v480-480Z"/>
    </Icon>
  );
};

IconMaterialWidthFull.displayName = 'OnesyIconMaterialWidthFull';

export default IconMaterialWidthFull;
