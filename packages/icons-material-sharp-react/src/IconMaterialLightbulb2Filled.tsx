import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLightbulb2Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Lightbulb2Filled'

      short_name='Lightbulb2'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M320-240v-130q-57-39-88.5-100T200-600q0-117 81.5-198.5T480-880q117 0 198.5 81.5T760-600q0 69-31.5 129.5T640-370v130H320Zm40 160v-80h240v80H360Z"/>
    </Icon>
  );
});

IconMaterialLightbulb2Filled.displayName = 'OnesyIconMaterialLightbulb2Filled';

export default IconMaterialLightbulb2Filled;
