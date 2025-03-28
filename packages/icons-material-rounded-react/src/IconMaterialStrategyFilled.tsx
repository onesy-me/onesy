import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialStrategyFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StrategyFilled'

      short_name='Strategy'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m200-531-100-57q-9-5-14.5-14.5T80-623v-114q0-11 5.5-20.5T100-772l100-57q9-5 20-5t20 5l100 57q9 5 14.5 14.5T360-737v114q0 11-5.5 20.5T340-588l-100 57q-9 5-20 5t-20-5Zm460 91v-142l100 59q19 11 29.5 29t10.5 40v188q0 22-10.5 40T760-197l-160 93q-19 11-40 11t-40-11l-160-93q-19-11-29.5-29T320-266v-188q0-22 10.5-40t29.5-29l100-59v142q0 42 29 71t71 29q42 0 71-29t29-71Zm-60-200v200q0 17-11.5 28.5T560-400q-17 0-28.5-11.5T520-440v-400q0-17 11.5-28.5T560-880h245q24 0 36 21t-2 41l-24 36q-7 10-7 22t7 22l24 36q14 20 2 41t-36 21H600Z"/>
    </Icon>
  );
});

IconMaterialStrategyFilled.displayName = 'OnesyIconMaterialStrategyFilled';

export default IconMaterialStrategyFilled;
