import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDetectionAndZoneW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DetectionAndZoneW100'

      short_name='DetectionAndZone'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-680v-148h148v28H160v120h-28Zm0 548v-148h28v120h120v28H132Zm548 0v-28h120v-120h28v148H680Zm120-548v-120H680v-28h148v148h-28Zm-260 84q-27 0-45.5-18.5T476-660q0-27 18.5-45.5T540-724q27 0 45.5 18.5T604-660q0 27-18.5 45.5T540-596ZM384-272l42-216-132 55v127h-28v-146l160-66q23-9 34-12.5t20-3.5q14 0 26 7.5t20 20.5l40 64q25 40 69.5 70t98.5 36v28q-53-5-109-37.5T527-451l-35 179H384Z"/>
    </Icon>
  );
});

IconMaterialDetectionAndZoneW100.displayName = 'OnesyIconMaterialDetectionAndZoneW100';

export default IconMaterialDetectionAndZoneW100;
