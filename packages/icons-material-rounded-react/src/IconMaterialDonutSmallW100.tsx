import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDonutSmallW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DonutSmallW100'

      short_name='DonutSmall'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M515-790q0-15.45 11.5-24.73Q538-824 552-821q103 20 176.5 94T822-550q3 14-5.83 24-8.82 10-24.17 10H585q-3 0-5.25-1.5T576-522q-9-18-23.15-32.14Q538.69-568.29 521-576q-3-1.45-4.5-3.27T515-584v-206Zm28-4v196q17 10 31 23.5t23 30.5h198q-20-95-88.5-163.5T543-794ZM408-140q-119-26-197-120.73-78-94.72-78-219.27 0-125.29 78-220.15Q289-795 408-820q15-3 27 7.17 12 10.18 12 25.83v203.85q0 .89-5 7.15-29 12-47 38.21-18 26.2-18 58 0 31.79 18 57.29t47 36.5q1 0 5 7v206q0 16.36-12 26.18T408-140Zm11-654q-113 21-185.5 110T161-480q0 115 72.5 204T419-166v-200q-30-20-50-49.5t-20-65q0-35.5 19.5-65.5t50.5-50v-198Zm130 655q-14 2-24-6.45-10-8.46-10-22.55v-209q0-3 1.5-5.25T521-386q19-8 33.05-22.15Q568.1-422.31 576-440l8.93-6H792q13.71 0 22.86 11.5Q824-423 821-409q-21 103-95 176.5T549-139Zm48-279q-11 16-24 29.5T543-366v200q96-19 164-87.5T795-418H597Zm-248-62Zm248-64Zm0 126Z"/>
    </Icon>
  );
});

IconMaterialDonutSmallW100.displayName = 'OnesyIconMaterialDonutSmallW100';

export default IconMaterialDonutSmallW100;
