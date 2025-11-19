import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialVideocam = (props: IIcon) => {

  return (
    <Icon
      name='Videocam'

      short_name='Videocam'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-160v-640h640v260l160-160v440L720-420v260H80Zm80-80h480v-480H160v480Zm0 0v-480 480Z"/>
    </Icon>
  );
};

IconMaterialVideocam.displayName = 'OnesyIconMaterialVideocam';

export default IconMaterialVideocam;
