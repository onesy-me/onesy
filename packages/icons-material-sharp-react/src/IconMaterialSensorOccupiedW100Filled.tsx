import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSensorOccupiedW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SensorOccupiedW100Filled'

      short_name='SensorOccupied'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-526q-39 0-66.5-27.5T386-620q0-39 27.5-66.5T480-714q39 0 66.5 27.5T574-620q0 39-27.5 66.5T480-526ZM266-326v-50q0-16 7-28t21-20q42-25 89-37.5t97-12.5q49 0 96.5 12.5T666-424q13 8 20.5 20.5T694-376v50H266Zm583-308q-31-74-87-129.5T634-849l11-26q82 37 137 91t94 139l-27 11Zm-738 0-26-11q37-84 92-138.5T315-875l11 26q-73 31-128.5 86.5T111-634ZM314-85q-81-35-138-93T85-316l26-10q31 73 86.5 128.5T326-111l-12 26Zm330 0-10-26q73-31 128.5-86.5T849-326l26 11q-37 82-93.5 138.5T644-85Z"/>
    </Icon>
  );
});

IconMaterialSensorOccupiedW100Filled.displayName = 'OnesyIconMaterialSensorOccupiedW100Filled';

export default IconMaterialSensorOccupiedW100Filled;
