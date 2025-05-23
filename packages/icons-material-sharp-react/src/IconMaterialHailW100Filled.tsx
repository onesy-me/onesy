import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHailW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HailW100Filled'

      short_name='Hail'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M206-106v-188h68v188h-68Zm196 0v-515q-66 17-101.5 59T256-446h-28q9-104 75.5-158T480-658q106 0 163-29.5T706-818h28q-3 84-47 130.5T558-634v528h-28v-234H430v234h-28Zm78-626q-27 0-45.5-18.5T416-796q0-27 18.5-45.5T480-860q27 0 45.5 18.5T544-796q0 27-18.5 45.5T480-732Z"/>
    </Icon>
  );
});

IconMaterialHailW100Filled.displayName = 'OnesyIconMaterialHailW100Filled';

export default IconMaterialHailW100Filled;
