import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAirlineSeatReclineNormalW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AirlineSeatReclineNormalW100'

      short_name='AirlineSeatReclineNormal'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M573-212H339q-26 0-43-17t-17-43v-394q0-6 4-10t10-4q6 0 10 4t4 10v394q0 12 10 22t22 10h234q6 0 10 4t4 10q0 6-4 10t-10 4ZM421-694q-27 0-45.5-18.5T357-758q0-27 18.5-45.5T421-822q27 0 45.5 18.5T485-758q0 27-18.5 45.5T421-694Zm232 574v-160H401q-23 0-38.5-15.5T347-334v-234q0-32 21-53t53-21q32 0 53 21t21 53v220h132q23 0 38.5 15.5T681-294v174q0 6-4 10t-10 4q-6 0-10-4t-4-10Z"/>
    </Icon>
  );
});

IconMaterialAirlineSeatReclineNormalW100.displayName = 'OnesyIconMaterialAirlineSeatReclineNormalW100';

export default IconMaterialAirlineSeatReclineNormalW100;
