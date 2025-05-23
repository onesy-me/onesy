import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWomanW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WomanW100Filled'

      short_name='Woman'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M408-136v-216h-64q-15.87 0-24.93-13-9.07-13-3.07-28l94-236q8.94-21.69 27.72-34.35Q456.5-676 479.75-676t42.23 12.65Q540.96-650.69 550-629l94 236q6 15-3.07 28-9.06 13-24.93 13h-64v216q0 12.75-8.62 21.37Q534.75-106 522-106h-84q-12.75 0-21.37-8.63Q408-123.25 408-136Zm72-594q-26.4 0-45.2-18.8Q416-767.6 416-794q0-26.4 18.8-45.2Q453.6-858 480-858q26.4 0 45.2 18.8Q544-820.4 544-794q0 26.4-18.8 45.2Q506.4-730 480-730Z"/>
    </Icon>
  );
});

IconMaterialWomanW100Filled.displayName = 'OnesyIconMaterialWomanW100Filled';

export default IconMaterialWomanW100Filled;
