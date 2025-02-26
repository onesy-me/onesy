import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialChangeCircleFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChangeCircleFilled'

      short_name='ChangeCircle'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M483-341q-29 1-55.5-9.5T381-381q-20-20-30.5-45T340-479q0-10 1-19.5t4-18.5q4-12-.5-24T329-558q-12-5-23.5 0T290-541q-5 15-7.5 30t-2.5 31q0 40 15.5 76.5T339-339q27 28 63.5 43t75.5 16l-17 17q-9 9-9 21t9 21q9 9 21 9t21-9l64-64q12-12 12-28t-12-28l-64-64q-9-9-21-9t-21 9q-9 9-9 21t9 21l22 22Zm-7-279q29 0 56 10.5t47 30.5q20 20 30.5 45t10.5 53q0 10-1 19.5t-4 18.5q-4 12 .5 24.5T631-401q12 5 23.5 0t15.5-17q5-15 7.5-30.5T680-480q0-40-14.5-76.5T622-622q-28-28-64.5-42.5T482-679l18-18q8-9 8-21t-9-21q-9-9-21-9t-21 9l-64 64q-12 12-12 28t12 28l64 64q9 9 21 9t21-9q9-9 9-21t-9-21l-23-23Zm4 540q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z"/>
    </Icon>
  );
});

IconMaterialChangeCircleFilled.displayName = 'OnesyIconMaterialChangeCircleFilled';

export default IconMaterialChangeCircleFilled;
