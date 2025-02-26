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
      <path d="M372-294v-372l292 186-292 186Z"/>
    </Icon>
  );
});

IconMaterialPlayArrowW100Filled.displayName = 'OnesyIconMaterialPlayArrowW100Filled';

export default IconMaterialPlayArrowW100Filled;
