import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWoman2W100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Woman2W100'

      short_name='Woman2'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M429-136v-216h-85q-15.87 0-24.93-13-9.07-13-3.07-28l94-236q8.94-21.69 27.72-34.35Q456.5-676 479.75-676t42.23 12.65Q540.96-650.69 550-629l94 236q6 15-3.07 28-9.06 13-24.93 13h-85v216q0 12.75-8.62 21.37Q513.75-106 501-106h-42q-12.75 0-21.37-8.63Q429-123.25 429-136Zm51-594q-26.4 0-45.2-18.8Q416-767.6 416-794q0-26.4 18.8-45.2Q453.6-858 480-858q26.4 0 45.2 18.8Q544-820.4 544-794q0 26.4-18.8 45.2Q506.4-730 480-730Z"/>
    </Icon>
  );
});

IconMaterialWoman2W100.displayName = 'OnesyIconMaterialWoman2W100';

export default IconMaterialWoman2W100;
