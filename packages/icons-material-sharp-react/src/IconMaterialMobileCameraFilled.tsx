import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMobileCameraFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MobileCameraFilled'

      short_name='MobileCamera'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-40v-880h560v200H627l-40 40H440v440h320v200H200Zm320-280v-280h100l40-40h80l40 40h100v280H520Zm180-70q29 0 49.5-20.5T770-460q0-29-20.5-49.5T700-530q-29 0-49.5 20.5T630-460q0 29 20.5 49.5T700-390ZM480-720q17 0 28.5-11.5T520-760q0-17-11.5-28.5T480-800q-17 0-28.5 11.5T440-760q0 17 11.5 28.5T480-720Z"/>
    </Icon>
  );
});

IconMaterialMobileCameraFilled.displayName = 'OnesyIconMaterialMobileCameraFilled';

export default IconMaterialMobileCameraFilled;
