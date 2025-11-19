import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHangoutVideoFilled = (props: IIcon) => {

  return (
    <Icon
      name='HangoutVideoFilled'

      short_name='HangoutVideo'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-320h320v-128l160 128v-320L560-512v-128H240v320ZM80-160v-640h800v640H80Z"/>
    </Icon>
  );
};

IconMaterialHangoutVideoFilled.displayName = 'OnesyIconMaterialHangoutVideoFilled';

export default IconMaterialHangoutVideoFilled;
