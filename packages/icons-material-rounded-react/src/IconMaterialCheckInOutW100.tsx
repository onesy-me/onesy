import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCheckInOutW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CheckInOutW100'

      short_name='CheckInOut'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M304-262q-36 0-61.5-25.5T215-351q1-38 26.5-63.5t63-25.5q37.5 0 63.5 26t26 63q0 37-26 63t-64 26Zm-65.89-257q-6.11 0-10.11-3.92-4-3.92-4-10.08v-151q0-6.16 4.05-10.08 4.06-3.92 10-3.92 5.95 0 9.95 3.92 4 3.92 4 10.08v151q0 6.16-3.89 10.08t-10 3.92ZM304-287q26 0 44.5-18.5T367-351q0-27-18.5-46t-44.91-19q-25.59 0-44.09 19-18.5 19-18.5 46t18.5 45.5Q278-287 304-287Zm12.5-232q-5.5 0-10-4.5T302-533v-151q0-5.83 4.08-9.92Q310.17-698 316-698h11.52q4.48 0 7.62 2.04 3.15 2.04 4.86 4.96l77 127v-120q0-6.16 3.89-10.08t10-3.92q6.11 0 10.11 3.92 4 3.92 4 10.08v152q0 5.32-4 9.16t-9.49 3.84h-10.36q-3.66 0-6.41-1.5Q412-522 410-525l-81-135v128q0 5-3.5 9t-9 4Zm188.84 257q-28.34 0-47.84-21-19.5-21-19.5-51v-93q0-5.42 4-9.21 4-3.79 9-3.79t9 4q4 4 4 9v94q0 19.71 11.89 32.86 11.88 13.14 29 13.14 17.11 0 28.61-13.14Q545-313.29 545-333v-94q0-5.42 4.5-9.21Q554-440 559-440t9 4q4 4 4 9v93q0 30-19.5 51t-47.16 21ZM680-262q-5 0-9.5-4.5T666-276v-140h-38q-5.22 0-8.61-3.5Q616-423 616-428t3.39-8.5q3.39-3.5 8.61-3.5h104q5.22 0 8.61 3.35 3.39 3.35 3.39 8.5t-3.39 8.65q-3.39 3.5-8.61 3.5h-39v141q0 5.42-3.52 9.21Q685.96-262 680-262Z"/>
    </Icon>
  );
});

IconMaterialCheckInOutW100.displayName = 'OnesyIconMaterialCheckInOutW100';

export default IconMaterialCheckInOutW100;
