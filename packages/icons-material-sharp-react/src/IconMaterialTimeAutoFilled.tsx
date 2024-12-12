import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTimeAutoFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TimeAutoFilled'

      short_name='TimeAuto'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M320-280h74l23-70h124l23 70h76L520-618h-80L320-280Zm116-128 44-132 43 132h-87Zm-76-432v-80h240v80H360ZM480-80q-74 0-139.5-28.5T226-186q-49-49-77.5-114.5T120-440q0-74 28.5-139.5T226-694q49-49 114.5-77.5T480-800q62 0 119 20t107 58l56-56 56 56-56 56q38 50 58 107t20 119q0 74-28.5 139.5T734-186q-49 49-114.5 77.5T480-80Z"/>
    </Icon>
  );
});

IconMaterialTimeAutoFilled.displayName = 'OnesyIconMaterialTimeAutoFilled';

export default IconMaterialTimeAutoFilled;
