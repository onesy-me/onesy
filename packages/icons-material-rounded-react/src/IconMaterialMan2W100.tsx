import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMan2W100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Man2W100'

      short_name='Man2'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M429-136v-228h-55q-12.75 0-21.37-8.63Q344-381.25 344-394v-204q0-24.75 17.63-42.38Q379.25-658 404-658h152q24.75 0 42.38 17.62Q616-622.75 616-598v204q0 12.75-8.62 21.37Q598.75-364 586-364h-55v228q0 12.75-8.62 21.37Q513.75-106 501-106h-42q-12.75 0-21.37-8.63Q429-123.25 429-136Zm51-594q-26.4 0-45.2-18.8Q416-767.6 416-794q0-26.4 18.8-45.2Q453.6-858 480-858q26.4 0 45.2 18.8Q544-820.4 544-794q0 26.4-18.8 45.2Q506.4-730 480-730Z"/>
    </Icon>
  );
});

IconMaterialMan2W100.displayName = 'OnesyIconMaterialMan2W100';

export default IconMaterialMan2W100;
