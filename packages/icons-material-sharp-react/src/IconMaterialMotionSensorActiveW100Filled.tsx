import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMotionSensorActiveW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MotionSensorActiveW100Filled'

      short_name='MotionSensorActive'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-132v-188h28v160h160v28H132Zm0-508v-188h188v28H160v160h-28Zm298 408q-75-15-129-69t-69-129h28q14 64 60 110t110 60v28ZM232-530q15-75 69-129t129-69v28q-64 14-110 60t-60 110h-28Zm248 104q-23 0-38.5-15.5T426-480q0-23 15.5-38.5T480-534q23 0 38.5 15.5T534-480q0 23-15.5 38.5T480-426Zm50 194v-28q64-14 110-60t60-110h28q-15 75-69 129t-129 69Zm170-298q-14-64-60-110t-110-60v-28q75 15 129 69t69 129h-28Zm-60 398v-28h160v-160h28v188H640Zm160-508v-160H640v-28h188v188h-28Z"/>
    </Icon>
  );
});

IconMaterialMotionSensorActiveW100Filled.displayName = 'OnesyIconMaterialMotionSensorActiveW100Filled';

export default IconMaterialMotionSensorActiveW100Filled;
