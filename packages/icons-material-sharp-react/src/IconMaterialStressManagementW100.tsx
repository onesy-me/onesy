import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialStressManagementW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StressManagementW100'

      short_name='StressManagement'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480.31-346q58.3 0 126-19Q674-384 791-435q5-18 7-36t2-38q0-11-8.5-18t-19.5-4q-14 5-31 10.5T698-504q-69 29-118 40.5T480-452q-52 0-102-12t-122-41q-26-11-40-16l-28-10q-11-4-19.5 3.5T160-509q0 20 2 38.5t7 36.5q98 45 175.5 66.5T480.31-346Zm-.75 134Q585-212 664.5-263.5T779-399q-96 42-166.47 61.5T480-318q-61 0-136-20t-163-60q34 85 113 135.5T479.56-212Zm.44-348q-56 0-95-39t-39-95q0-56 39-95t95-39q56 0 95 39t39 95q0 56-39 95t-95 39Zm.19-28Q524-588 555-619.19q31-31.2 31-75Q586-738 554.81-769q-31.2-31-75-31Q436-800 405-768.81q-31 31.2-31 75Q374-650 405.19-619q31.2 31 75 31Zm-.28 404Q328-184 230-274t-98-235q0-26 20-41.5t44-7.5q15.15 4.82 31.71 11.09Q244.28-540.64 267-531q71 29 117.23 40 46.24 11 95.77 11 48 0 93.5-10.5T687-529q27-11 44.5-17.5T764-558q24-8 44 8t20 41q0 69-27.5 128T726-278q-47 44-110.5 69t-135.59 25Z"/>
    </Icon>
  );
});

IconMaterialStressManagementW100.displayName = 'OnesyIconMaterialStressManagementW100';

export default IconMaterialStressManagementW100;
