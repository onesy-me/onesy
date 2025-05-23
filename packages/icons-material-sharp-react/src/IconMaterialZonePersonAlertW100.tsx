import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialZonePersonAlertW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ZonePersonAlertW100'

      short_name='ZonePersonAlert'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-212v-148h28v120h120v28H132Zm252-140 42-216-132 55v127h-28v-146l160-66q23-9 33.92-12.5 10.92-3.5 20.18-3.5 13.9 0 26.11 7.62 12.2 7.61 19.66 20.07L553-542q-42 34-66 83t-25 107h-78Zm156-324q-27 0-45.5-18.5T476-740q0-27 18.5-45.5T540-804q27 0 45.5 18.5T604-740q0 27-18.5 45.5T540-676Zm-408-84v-148h148v28H160v120h-28Zm668 0v-120H680v-28h148v148h-28Zm-90 557q-62 0-105-43t-43-105q0-62 43-105t105-43q62 0 105 43t43 105q0 62-43 105t-105 43Zm-14-128h28v-108h-28v108Zm14 72q8 0 13-5t5-13q0-8-5-13t-13-5q-8 0-13 5t-5 13q0 8 5 13t13 5Z"/>
    </Icon>
  );
});

IconMaterialZonePersonAlertW100.displayName = 'OnesyIconMaterialZonePersonAlertW100';

export default IconMaterialZonePersonAlertW100;
