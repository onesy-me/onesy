import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLightW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LightW100'

      short_name='Light'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-220q-47 0-79.5-32.5T368-332H174q-.89-5.6-1.44-12.78-.56-7.17-.56-15.22 0-121 85-212t209-96v-100h28v100q124 5 209 96t85 212q0 8.05-.56 15.22-.55 7.18-1.44 12.78H592q0 47-32.5 79.5T480-220ZM200-360h560q0-116-82-198t-198-82q-116 0-198 82t-82 198Zm280.25 112q34.75 0 59.25-24.67Q564-297.35 564-332H396q0 35 24.75 59.5t59.5 24.5Zm-.25-84Z"/>
    </Icon>
  );
});

IconMaterialLightW100.displayName = 'OnesyIconMaterialLightW100';

export default IconMaterialLightW100;
