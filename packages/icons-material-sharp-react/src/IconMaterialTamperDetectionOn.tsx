import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTamperDetectionOn = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TamperDetectionOn'

      short_name='TamperDetectionOn'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M560-280v-80h80v-480H160v120H80v-200h640v260l160-160v440L720-540v260H560Zm-80 120H145L0-304l56-56 64 64v-324h60v180h40v-240h60v240h40v-200h60v200h40v-160h60v440Zm160-680v480-480Z"/>
    </Icon>
  );
});

IconMaterialTamperDetectionOn.displayName = 'OnesyIconMaterialTamperDetectionOn';

export default IconMaterialTamperDetectionOn;
