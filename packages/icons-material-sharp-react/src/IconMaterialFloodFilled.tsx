import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFloodFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FloodFilled'

      short_name='Flood'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-80v-80q38 0 56.5-20t77.5-20q59 0 77 20t56 20q38 0 56-20t77-20q57 0 77.5 20t56.5 20q38 0 56-20t77-20q59 0 77 20t56 20v80q-58 0-77-20t-56-20q-37 0-56 20t-77 20q-58 0-77.5-20T480-120q-38 0-56 20t-77 20q-59 0-77-20t-56-20q-37 0-56 20T80-80Zm0-180v-80q38 0 56-20t77-20q6 0 12 .5t11 1.5l-38-140-55 72-63-50 311-384 461 176-29 75-84-34 81 301q14 8 27.5 15t32.5 7v80q-57-1-77-20.5T747-300q-38 0-56 20t-77 20q-57 0-77.5-20T480-300q-38 0-56 20t-77 20q-57 0-77-20t-56-20q-35 0-56 20t-78 20Zm538-81-56-212-155 41 37 136q8-2 16.5-3t19.5-1q57 0 81.5 22t56.5 17Z"/>
    </Icon>
  );
});

IconMaterialFloodFilled.displayName = 'OnesyIconMaterialFloodFilled';

export default IconMaterialFloodFilled;
