import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAirlineSeatIndividualSuiteFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AirlineSeatIndividualSuiteFilled'

      short_name='AirlineSeatIndividualSuite'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M40-280v-400h80v320h320v-320h480v400H40Zm240-120q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Z"/>
    </Icon>
  );
});

IconMaterialAirlineSeatIndividualSuiteFilled.displayName = 'OnesyIconMaterialAirlineSeatIndividualSuiteFilled';

export default IconMaterialAirlineSeatIndividualSuiteFilled;
