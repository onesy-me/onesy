import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWidthWide = (props: IIcon) => {

  return (
    <Icon
      name='WidthWide'

      short_name='WidthWide'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm0-80h80v-480h-80v480Zm160 0h320v-480H320v480Zm400 0h80v-480h-80v480ZM320-720v480-480Z"/>
    </Icon>
  );
};

IconMaterialWidthWide.displayName = 'OnesyIconMaterialWidthWide';

export default IconMaterialWidthWide;
