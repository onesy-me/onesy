import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMotionSensorUrgentW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MotionSensorUrgentW100'

      short_name='MotionSensorUrgent'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m515-136 186-323 185 323H515Zm185-20q6 0 10-4t4-10q0-6-4-10t-10-4q-6 0-10 4t-4 10q0 6 4 10t10 4Zm-14-80h28v-148h-28v148ZM132-132v-188h28v160h160v28H132Zm0-508v-188h188v28H160v160h-28Zm298 408q-75-15-129-69t-69-129h28q14 64 60 110t110 60v28ZM232-530q15-75 69-129t129-69v28q-64 14-110 60t-60 110h-28Zm248 104q-23 0-38.5-15.5T426-480q0-23 15.5-38.5T480-534q23 0 38.5 15.5T534-480q0 23-15.5 38.5T480-426Zm220-104q-14-64-60-110t-110-60v-28q75 15 129 69t69 129h-28Zm100-110v-160H640v-28h188v188h-28Z"/>
    </Icon>
  );
});

IconMaterialMotionSensorUrgentW100.displayName = 'OnesyIconMaterialMotionSensorUrgentW100';

export default IconMaterialMotionSensorUrgentW100;
