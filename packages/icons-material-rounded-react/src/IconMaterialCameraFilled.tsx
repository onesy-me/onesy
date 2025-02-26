import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCameraFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CameraFilled'

      short_name='Camera'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M500-600q-11 0-17-10t0-20l117-203q8-13 20-15.5t26 4.5q69 31 122 86.5T850-632q5 13-1.5 22.5T828-600H500Zm-143 49L237-759q-8-13-4-26t16-21q48-34 106.5-54T480-880q15 0 33 1.5t30 3.5q14 2 18.5 12t-2.5 22L392-551q-6 10-17.5 10T357-551ZM114-400q-11 0-20-7.5T83-426q-2-11-2.5-24t-.5-30q0-63 20.5-125.5T164-724q11-14 25.5-14t22.5 15l168 293q6 10-.5 20T362-400H114Zm200 284q-66-32-121-87t-83-125q-5-13 2-22.5t21-9.5h326q11 0 17 10t0 20L361-129q-8 13-20 17t-27-4Zm166 36q-14 0-31.5-1.5T418-85q-14-2-19-12t2-22l165-288q6-10 20-10t20 10l118 205q7 11 4.5 24T712-154q-46 34-107.5 54T480-80Zm271-155L581-530q-6-10 .5-20t17.5-10h247q11 0 20 7.5t11 18.5q2 11 2.5 24t.5 30q0 63-20.5 126.5T796-235q-8 11-23 11.5T751-235Z"/>
    </Icon>
  );
});

IconMaterialCameraFilled.displayName = 'OnesyIconMaterialCameraFilled';

export default IconMaterialCameraFilled;
