import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDonutSmallW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DonutSmallW100Filled'

      short_name='DonutSmall'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M515-790q0-15.45 11.5-24.73Q538-824 552-821q103 20 176.5 94T822-550q3 14-5.83 24-8.82 10-24.17 10H585q-3 0-5.25-1.5T576-522q-9-18-23.15-32.14Q538.69-568.29 521-576q-3-1.45-4.5-3.27T515-584v-206ZM408-140q-119-26-197-120.73-78-94.72-78-219.27 0-125.29 78-220.15Q289-795 408-820q15-3 27 7.12 12 10.13 12 25.88v203.79q0 .9-5 7.21-29 12-47 38.21-18 26.2-18 58 0 31.79 18 57.29t47 36.5q1 0 5 7v206q0 15.75-12 25.87Q423-137 408-140Zm141 1q-14 2-24-6.7-10-8.69-10-22.3v-209q0-3 1.5-5.25T521-386q19-8 33.05-22.15Q568.1-422.31 576-440l8.93-6H792q13.71 0 22.86 11.5Q824-423 821-409q-21 103-95 176.5T549-139Z"/>
    </Icon>
  );
});

IconMaterialDonutSmallW100Filled.displayName = 'OnesyIconMaterialDonutSmallW100Filled';

export default IconMaterialDonutSmallW100Filled;
