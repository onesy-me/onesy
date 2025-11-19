import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialUpcomingFilled = (props: IIcon) => {

  return (
    <Icon
      name='UpcomingFilled'

      short_name='Upcoming'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-120v-360h280q0 50 35 85t85 35q50 0 85-35t35-85h280v360H80Zm624-408-56-56 142-142 56 56-142 142Zm-448 0L114-670l56-56 142 142-56 56Zm184-112v-200h80v200h-80Z"/>
    </Icon>
  );
};

IconMaterialUpcomingFilled.displayName = 'OnesyIconMaterialUpcomingFilled';

export default IconMaterialUpcomingFilled;
