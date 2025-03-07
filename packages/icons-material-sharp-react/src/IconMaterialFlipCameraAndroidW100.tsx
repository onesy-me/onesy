import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFlipCameraAndroidW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlipCameraAndroidW100'

      short_name='FlipCameraAndroid'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-106q-125 0-224.5-74T122-374h28q34 109 125 174.5T480-134q105 0 190-60t136-152H666v-28h188v188h-28v-140q-54 97-144.5 158.5T480-106Zm0-306q-29 0-48.5-19.5T412-480q0-29 19.5-48.5T480-548q29 0 48.5 19.5T548-480q0 29-19.5 48.5T480-412ZM106-586v-188h28v140q54-97 144.5-158.5T480-854q125 0 224.5 74T838-586h-28q-34-109-125-174.5T480-826q-105 0-190 60T154-614h140v28H106Z"/>
    </Icon>
  );
});

IconMaterialFlipCameraAndroidW100.displayName = 'OnesyIconMaterialFlipCameraAndroidW100';

export default IconMaterialFlipCameraAndroidW100;
