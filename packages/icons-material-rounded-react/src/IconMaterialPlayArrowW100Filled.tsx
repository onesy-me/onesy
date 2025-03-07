import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPlayArrowW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PlayArrowW100Filled'

      short_name='PlayArrow'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M372-349v-262q0-14 9.07-22 9.06-8 21.15-8 3.78 0 7.91 1 4.12 1 7.87 3l206 132q7 5 10.5 11t3.5 14q0 8-3.5 14T624-455L418-323q-3.78 2-7.95 3-4.16 1-7.94 1-12.11 0-21.11-8t-9-22Z"/>
    </Icon>
  );
});

IconMaterialPlayArrowW100Filled.displayName = 'OnesyIconMaterialPlayArrowW100Filled';

export default IconMaterialPlayArrowW100Filled;
