import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCameraOutdoorFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CameraOutdoorFilled'

      short_name='CameraOutdoor'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-120q-33 0-56.5-23.5T160-200v-360q0-19 8.5-36t23.5-28l240-180q21-16 48-16t48 16l240 180q15 11 23.5 28t8.5 36q-11 11-17.5 25.5T760-520H520q-33 0-56.5 23.5T440-440v160q0 33 23.5 56.5T520-200h240q17 0 28.5 11.5T800-160q0 17-11.5 28.5T760-120H240Zm280-120q-17 0-28.5-11.5T480-280v-160q0-17 11.5-28.5T520-480h160q17 0 28.5 11.5T720-440v40l51-27q10-5 19.5 1t9.5 17v98q0 11-9.5 17t-19.5 1l-51-27v40q0 17-11.5 28.5T680-240H520Z"/>
    </Icon>
  );
});

IconMaterialCameraOutdoorFilled.displayName = 'OnesyIconMaterialCameraOutdoorFilled';

export default IconMaterialCameraOutdoorFilled;
