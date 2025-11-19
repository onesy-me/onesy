import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSmartDisplay = (props: IIcon) => {

  return (
    <Icon
      name='SmartDisplay'

      short_name='SmartDisplay'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m380-300 280-180-280-180v360ZM80-160v-640h800v640H80Zm80-80h640v-480H160v480Zm0 0v-480 480Z"/>
    </Icon>
  );
};

IconMaterialSmartDisplay.displayName = 'OnesyIconMaterialSmartDisplay';

export default IconMaterialSmartDisplay;
