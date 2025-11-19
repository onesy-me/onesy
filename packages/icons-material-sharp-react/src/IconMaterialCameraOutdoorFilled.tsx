import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCameraOutdoorFilled = (props: IIcon) => {

  return (
    <Icon
      name='CameraOutdoorFilled'

      short_name='CameraOutdoor'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-120v-480l320-240 320 240v80H440v320h360v80H160Zm320-120v-240h240v80l80-42v164l-80-42v80H480Z"/>
    </Icon>
  );
};

IconMaterialCameraOutdoorFilled.displayName = 'OnesyIconMaterialCameraOutdoorFilled';

export default IconMaterialCameraOutdoorFilled;
