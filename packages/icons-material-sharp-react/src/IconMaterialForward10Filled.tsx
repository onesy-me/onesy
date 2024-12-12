import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialForward10Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Forward10Filled'

      short_name='Forward10'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M360-320v-180h-60v-60h120v240h-60Zm100 0v-240h160v240H460Zm60-60h40v-120h-40v120ZM480-80q-75 0-140.5-28.5t-114-77q-48.5-48.5-77-114T120-440q0-75 28.5-140.5t77-114q48.5-48.5 114-77T480-800h6l-62-62 56-58 160 160-160 160-56-58 62-62h-6q-117 0-198.5 81.5T200-440q0 117 81.5 198.5T480-160q117 0 198.5-81.5T760-440h80q0 75-28.5 140.5t-77 114q-48.5 48.5-114 77T480-80Z"/>
    </Icon>
  );
});

IconMaterialForward10Filled.displayName = 'OnesyIconMaterialForward10Filled';

export default IconMaterialForward10Filled;
