import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFlipCameraAndroidFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlipCameraAndroidFilled'

      short_name='FlipCameraAndroid'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-80q-128 0-230.5-73T104-344q-5-15 3-28t24-18q16-5 30.5 3.5T182-363q36 91 117 147t181 56q86 0 160-42.5T756-320h-76q-17 0-28.5-11.5T640-360q0-17 11.5-28.5T680-400h160q17 0 28.5 11.5T880-360v160q0 17-11.5 28.5T840-160q-17 0-28.5-11.5T800-200v-40q-57 76-141 118T480-80Zm0-720q-86 0-160 42.5T204-640h76q17 0 28.5 11.5T320-600q0 17-11.5 28.5T280-560H120q-17 0-28.5-11.5T80-600v-160q0-17 11.5-28.5T120-800q17 0 28.5 11.5T160-760v40q57-76 141-118t179-42q128 0 230.5 73T856-616q5 15-3 28t-24 18q-16 5-30.5-3.5T778-597q-36-91-117-147t-181-56Zm0 440q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35Z"/>
    </Icon>
  );
});

IconMaterialFlipCameraAndroidFilled.displayName = 'OnesyIconMaterialFlipCameraAndroidFilled';

export default IconMaterialFlipCameraAndroidFilled;
