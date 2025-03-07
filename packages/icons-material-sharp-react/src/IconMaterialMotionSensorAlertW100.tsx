import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMotionSensorAlertW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MotionSensorAlertW100'

      short_name='MotionSensorAlert'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-212v-188h28v160h160v28H132Zm0-508v-188h188v28H160v160h-28Zm298 408q-75-15-129-69t-69-129h28q14 64 60 110t110 60v28ZM232-610q15-75 69-129t129-69v28q-64 14-110 60t-60 110h-28Zm248 104q-23 0-38.5-15.5T426-560q0-23 15.5-38.5T480-614q23 0 38.5 15.5T534-560q0 23-15.5 38.5T480-506Zm220-104q-14-64-60-110t-110-60v-28q75 15 129 69t69 129h-28Zm100-110v-160H640v-28h188v188h-28Zm-90 538q-62 0-105-43t-43-105q0-62 43-105t105-43q62 0 105 43t43 105q0 62-43 105t-105 43Zm0-56q8 0 13-5t5-13q0-8-5-13t-13-5q-8 0-13 5t-5 13q0 8 5 13t13 5Zm-14-72h28v-108h-28v108Z"/>
    </Icon>
  );
});

IconMaterialMotionSensorAlertW100.displayName = 'OnesyIconMaterialMotionSensorAlertW100';

export default IconMaterialMotionSensorAlertW100;
