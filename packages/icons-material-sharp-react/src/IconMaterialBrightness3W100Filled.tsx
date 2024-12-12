import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBrightness3W100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Brightness3W100Filled'

      short_name='Brightness3'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M370-132h-14q92-55 143.5-148T551-480q0-107-51.5-200T356-828h14q72.21 0 135.72 27.39 63.51 27.39 110.49 74.35 46.98 46.96 74.38 110.43Q718-552.35 718-480.17q0 72.17-27.41 135.73-27.4 63.56-74.38 110.57-46.98 47.02-110.49 74.44Q442.21-132 370-132Z"/>
    </Icon>
  );
});

IconMaterialBrightness3W100Filled.displayName = 'OnesyIconMaterialBrightness3W100Filled';

export default IconMaterialBrightness3W100Filled;
