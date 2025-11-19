import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCameraRollFilled = (props: IIcon) => {

  return (
    <Icon
      name='CameraRollFilled'

      short_name='CameraRoll'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-80v-760h120v-80h240v80h120v80h320v600H560v80H80Zm280-200h80v-80h-80v80Zm0-280h80v-80h-80v80Zm160 280h80v-80h-80v80Zm0-280h80v-80h-80v80Zm160 280h80v-80h-80v80Zm0-280h80v-80h-80v80Z"/>
    </Icon>
  );
};

IconMaterialCameraRollFilled.displayName = 'OnesyIconMaterialCameraRollFilled';

export default IconMaterialCameraRollFilled;
