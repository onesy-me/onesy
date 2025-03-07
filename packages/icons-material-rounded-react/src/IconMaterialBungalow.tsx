import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBungalow = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Bungalow'

      short_name='Bungalow'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M320-120q-17 0-28.5-11.5T280-160v-208l-23 37q-9 14-25 17.5t-30-5.5q-14-9-18-25t5-30l257-412q6-10 15-14t19-4q10 0 19 4t15 14l257 412q9 14 5 30t-18 25q-14 9-30 5t-25-18l-23-36v208q0 17-11.5 28.5T640-120H320Zm40-80h80v-80q0-17 11.5-28.5T480-320q17 0 28.5 11.5T520-280v80h80v-296L480-688 360-496v296Zm0 0h240-240Zm120-200q-17 0-28.5-11.5T440-440q0-17 11.5-28.5T480-480q17 0 28.5 11.5T520-440q0 17-11.5 28.5T480-400Z"/>
    </Icon>
  );
});

IconMaterialBungalow.displayName = 'OnesyIconMaterialBungalow';

export default IconMaterialBungalow;
