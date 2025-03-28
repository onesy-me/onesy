import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLightningStandW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LightningStandW100'

      short_name='LightningStand'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M479.87-92Q364-92 288-121.71q-76-29.72-76-98.29 0-68.57 76.13-98.29 76.13-29.71 192-29.71T672-318.29q76 29.72 76 98.29 0 68.57-76.13 98.29Q595.74-92 479.87-92Zm.13-80q-106 0-167-23t-61-63q-7 7-9.5 18t-2.5 20q0 45 65.5 72.5T480-120q109 0 174.5-27.5T720-220q0-9-2.5-20t-9.5-18q0 40-61 63t-167 23Zm0-28q88 0 144-17t56-43q0-26-56-43t-144-17q-88 0-144 17t-56 43q0 26 56 43t144 17Zm-32-360h-37.93q-9.07 0-13.57-7t.39-15.15L498-759q3-5 8.5-4t5.5 7.49V-624h37.93q9.07 0 13.57 7t-.39 15.15L462-425q-3 5-8.5 4t-5.5-7.49V-560Zm32 360Zm0 80Zm-2-52Z"/>
    </Icon>
  );
});

IconMaterialLightningStandW100.displayName = 'OnesyIconMaterialLightningStandW100';

export default IconMaterialLightningStandW100;
