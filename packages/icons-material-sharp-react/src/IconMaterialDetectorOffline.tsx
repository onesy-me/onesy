import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDetectorOffline = (props: IIcon) => {

  return (
    <Icon
      name='DetectorOffline'

      short_name='DetectorOffline'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m376-120-56-56 104-104-104-104 56-56 104 104 104-104 56 56-104 104 104 104-56 56-104-104-104 104ZM200-760v40h560v-40H200Zm124 120 12 40h288l12-40H324Zm-46 120-38-120H120v-200h720v200H720l-46 120H278Zm-78-240v40-40Z"/>
    </Icon>
  );
};

IconMaterialDetectorOffline.displayName = 'OnesyIconMaterialDetectorOffline';

export default IconMaterialDetectorOffline;
