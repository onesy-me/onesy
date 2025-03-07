import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRoundaboutRightFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RoundaboutRightFilled'

      short_name='RoundaboutRight'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-160v-203q-88-14-144-81.5T80-600q0-100 70-170t170-70q88 0 155.5 56T557-640h170l-36-36q-11-11-11-27.5t12-28.5q11-11 28-11t28 11l104 104q6 6 8.5 13t2.5 15q0 8-2.5 15t-8.5 13L748-468q-11 11-27.5 11T692-468q-12-12-12-28.5t12-28.5l35-35H556q-29 0-51-19t-27-48q-10-58-54.5-95.5T320-760q-66 0-113 47t-47 113q0 59 37.5 103.5T293-442q29 5 48 27t19 51v204q0 17-11.5 28.5T320-120q-17 0-28.5-11.5T280-160Z"/>
    </Icon>
  );
});

IconMaterialRoundaboutRightFilled.displayName = 'OnesyIconMaterialRoundaboutRightFilled';

export default IconMaterialRoundaboutRightFilled;
