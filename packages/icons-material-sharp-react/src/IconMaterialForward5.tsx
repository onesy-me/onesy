import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialForward5 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Forward5'

      short_name='Forward5'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-80q-75 0-140.5-28.5t-114-77q-48.5-48.5-77-114T120-440q0-75 28.5-140.5t77-114q48.5-48.5 114-77T480-800h6l-62-62 56-58 160 160-160 160-56-58 62-62h-6q-117 0-198.5 81.5T200-440q0 117 81.5 198.5T480-160q117 0 198.5-81.5T760-440h80q0 75-28.5 140.5t-77 114q-48.5 48.5-114 77T480-80ZM380-320v-60h120v-40H380v-140h180v60H440v40h120v140H380Z"/>
    </Icon>
  );
});

IconMaterialForward5.displayName = 'OnesyIconMaterialForward5';

export default IconMaterialForward5;
