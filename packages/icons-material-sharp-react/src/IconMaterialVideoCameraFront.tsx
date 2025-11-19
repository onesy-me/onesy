import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialVideoCameraFront = (props: IIcon) => {

  return (
    <Icon
      name='VideoCameraFront'

      short_name='VideoCameraFront'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-320h320v-22q0-44-44-71t-116-27q-72 0-116 27t-44 71v22Zm160-160q33 0 56.5-23.5T480-560q0-33-23.5-56.5T400-640q-33 0-56.5 23.5T320-560q0 33 23.5 56.5T400-480ZM80-160v-640h640v260l160-160v440L720-420v260H80Zm80-80h480v-480H160v480Zm0 0v-480 480Z"/>
    </Icon>
  );
};

IconMaterialVideoCameraFront.displayName = 'OnesyIconMaterialVideoCameraFront';

export default IconMaterialVideoCameraFront;
