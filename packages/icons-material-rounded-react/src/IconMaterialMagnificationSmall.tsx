import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMagnificationSmall = (props: IIcon) => {

  return (
    <Icon
      name='MagnificationSmall'

      short_name='MagnificationSmall'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm0-80h640v-480H160v480Zm0 0v-480 480Zm120-280q33 0 56.5-23.5T360-600q0-33-23.5-56.5T280-680q-33 0-56.5 23.5T200-600q0 33 23.5 56.5T280-520Z"/>
    </Icon>
  );
};

IconMaterialMagnificationSmall.displayName = 'OnesyIconMaterialMagnificationSmall';

export default IconMaterialMagnificationSmall;
