import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSailingW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SailingW100Filled'

      short_name='Sailing'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m203-493 170-245q5-7 11.5-9t13.5 0q7 2 11.5 8t4.5 14v249q0 13-8.5 21.5T384-446H227q-9 0-15.5-4.5T201-462q-4-7-3.5-15t5.5-16Zm371 47q-23 0-26.5-16t.5-33q7-35 12.5-78.5T566-660q0-48-5-92t-12-79q-2-8 1-13.5t8-8.5q5-4 11.5-4.5T582-853q49 32 86.5 73t67.5 92q28 48 46 100.5T808-480q2 14-7 24t-23 10H574ZM360-194q-27 0-52-10t-48-24q-5-3-9.5-4t-9.5 0q-5 1-9.5 2.5T223-224q-5 5-9.5 8t-10.5 5q-22-17-39-37t-30-44q-8-14 1-28t25-14h640q16 0 24.5 14t1.5 28q-14 23-30.5 43.5T757-211q-5-2-10.5-5.5T737-224q-4-4-8.5-5.5T719-232q-5-1-9.5 0t-9.5 4q-23 14-48 24t-52 10q-29 0-54.5-11T496-231q-4-2-7.5-3.5T480-236q-5 0-8.5 1.5T464-231q-24 15-49.5 26T360-194Zm120 95q-32 17-62 25t-58 8q-28 0-58-8t-62-25q-32 17-62 25t-58 8q-6 0-10-4t-4-10q0-5 5-7.5t9-6.5q29 0 55-9.5t52-21.5q3-2 6.5-2.5t6.5-.5q3 0 6.5.5t6.5 2.5q26 12 52 21.5t55 9.5q29 0 55-9.5t52-21.5q3-2 6.5-2.5t6.5-.5q3 0 6.5.5t6.5 2.5q26 12 52 21.5t55 9.5q29 0 55-9.5t52-21.5q2-1 13-3 1 0 13 3 26 12 52 21.5t55 9.5q6 0 10 4t4 10q0 5-5 7.5t-9 6.5q-28 0-58-8t-62-25q-32 17-62 25t-58 8q-28 0-58-8t-62-25Z"/>
    </Icon>
  );
});

IconMaterialSailingW100Filled.displayName = 'OnesyIconMaterialSailingW100Filled';

export default IconMaterialSailingW100Filled;
