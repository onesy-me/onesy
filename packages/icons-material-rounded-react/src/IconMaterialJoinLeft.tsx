import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialJoinLeft = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='JoinLeft'

      short_name='JoinLeft'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M40-480q0-117 81.5-198.5T320-760q14 0 26.5 1.5T372-755q17 3 21.5 20t-8.5 31q-41 47-63 104t-22 120q0 63 22 120t63 104q12 14 7.5 30.5T372-205q-13 2-25.5 3.5T320-200q-117 0-198.5-81.5T40-480Zm440 218q-7 0-14-2.5t-12-7.5q-46-38-70-93t-24-115q0-60 24-115t70-93q5-5 12-7.5t14-2.5q7 0 14 2.5t12 7.5q46 38 70 93t24 115q0 60-24 115t-70 93q-5 5-12 7.5t-14 2.5Zm440-218q0 56-21 107t-61 91q-45 45-105.5 65T609-203q-17-2-27-14t-8-29q2-17 14.5-27t29.5-8q45 5 88-10.5t75-47.5q28-28 43.5-64.5T840-480q0-40-15.5-76.5T781-621q-32-32-75-47.5T618-679q-17 2-29.5-8T574-714q-2-17 8-29.5t27-14.5q64-7 124 14t105 66q40 40 61 91t21 107Z"/>
    </Icon>
  );
});

IconMaterialJoinLeft.displayName = 'OnesyIconMaterialJoinLeft';

export default IconMaterialJoinLeft;
