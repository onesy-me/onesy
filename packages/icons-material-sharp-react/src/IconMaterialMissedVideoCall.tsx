import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMissedVideoCall = (props: IIcon) => {

  return (
    <Icon
      name='MissedVideoCall'

      short_name='MissedVideoCall'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-160v-640h640v260l160-160v440L720-420v260H80Zm80-80h480v-480H160v480Zm0 0v-480 480Zm268-80 180-182-56-56-124 124-88-86h60v-80H200v200h80v-68l148 148Z"/>
    </Icon>
  );
};

IconMaterialMissedVideoCall.displayName = 'OnesyIconMaterialMissedVideoCall';

export default IconMaterialMissedVideoCall;
