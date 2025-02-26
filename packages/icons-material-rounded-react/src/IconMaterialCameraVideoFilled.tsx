import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCameraVideoFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CameraVideoFilled'

      short_name='CameraVideo'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-480q-33 0-56.5-23.5T400-560q0-33 23.5-56.5T480-640q33 0 56.5 23.5T560-560q0 33-23.5 56.5T480-480ZM260-600q17 0 28.5-11.5T300-640q0-17-11.5-28.5T260-680q-17 0-28.5 11.5T220-640q0 17 11.5 28.5T260-600Zm-60 480q-17 0-28.5-11.5T160-160q0-17 11.5-28.5T200-200h89l21-84q-99-17-164.5-94.5T80-560q0-117 81.5-198.5T360-840h240q117 0 198.5 81.5T880-560q0 104-65.5 181.5T650-284l21 84h89q17 0 28.5 11.5T800-160q0 17-11.5 28.5T760-120H200Zm280-280q66 0 113-47t47-113q0-66-47-113t-113-47q-66 0-113 47t-47 113q0 66 47 113t113 47Z"/>
    </Icon>
  );
});

IconMaterialCameraVideoFilled.displayName = 'OnesyIconMaterialCameraVideoFilled';

export default IconMaterialCameraVideoFilled;
