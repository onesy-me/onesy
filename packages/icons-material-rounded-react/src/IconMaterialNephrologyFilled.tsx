import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNephrologyFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NephrologyFilled'

      short_name='Nephrology'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M320-280q-100 0-170-70T80-520v-80q0-100 70-170t170-70q50 0 85 35t35 85q0 50-35 85t-85 35v80q50 0 85 35t35 85v240q0 17-11.5 28.5T400-120q-17 0-28.5-11.5T360-160v-127q-10 4-19.5 5.5T320-280Zm320 0q-11 0-20.5-1.5T600-287v127q0 17-11.5 28.5T560-120q-17 0-28.5-11.5T520-160v-240q0-50 35-85t85-35v-80q-50 0-85-35t-35-85q0-50 35-85t85-35q100 0 170 70t70 170v80q0 100-70 170t-170 70Z"/>
    </Icon>
  );
});

IconMaterialNephrologyFilled.displayName = 'OnesyIconMaterialNephrologyFilled';

export default IconMaterialNephrologyFilled;
