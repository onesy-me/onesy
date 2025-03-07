import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSaveAsFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SaveAsFilled'

      short_name='SaveAs'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-560h360v-160H240v160Zm-40 440q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h447q16 0 30.5 6t25.5 17l114 114q11 11 17 25.5t6 30.5v134q0 17-13.5 27t-30.5 7q-9-1-18-1t-18 2q-20 3-39 12.5T686-441l-86 86v-5q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35h4l-20 20q-11 11-17.5 26t-6.5 31v3q0 17-11.5 28.5T400-120H200Zm320 40v-66q0-8 3-15.5t9-13.5l209-208q9-9 20-13t22-4q12 0 23 4.5t20 13.5l37 37q8 9 12.5 20t4.5 22q0 11-4 22.5T863-260L655-52q-6 6-13.5 9T626-40h-66q-17 0-28.5-11.5T520-80Zm263-184 37-39-37-37-38 38 38 38Z"/>
    </Icon>
  );
});

IconMaterialSaveAsFilled.displayName = 'OnesyIconMaterialSaveAsFilled';

export default IconMaterialSaveAsFilled;
