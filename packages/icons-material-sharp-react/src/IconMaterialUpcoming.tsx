import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialUpcoming = (props: IIcon) => {

  return (
    <Icon
      name='Upcoming'

      short_name='Upcoming'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-120v-360h280q0 50 35 85t85 35q50 0 85-35t35-85h280v360H80Zm80-80h640v-200H664q-25 55-74.5 87.5T480-280q-60 0-109.5-32.5T296-400H160v200Zm544-328-56-56 142-142 56 56-142 142Zm-448 0L114-670l56-56 142 142-56 56Zm184-112v-200h80v200h-80ZM160-200h640-640Z"/>
    </Icon>
  );
};

IconMaterialUpcoming.displayName = 'OnesyIconMaterialUpcoming';

export default IconMaterialUpcoming;
