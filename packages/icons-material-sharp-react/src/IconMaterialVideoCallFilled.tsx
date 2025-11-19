import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialVideoCallFilled = (props: IIcon) => {

  return (
    <Icon
      name='VideoCallFilled'

      short_name='VideoCall'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M360-320h80v-120h120v-80H440v-120h-80v120H240v80h120v120ZM80-160v-640h640v260l160-160v440L720-420v260H80Z"/>
    </Icon>
  );
};

IconMaterialVideoCallFilled.displayName = 'OnesyIconMaterialVideoCallFilled';

export default IconMaterialVideoCallFilled;
