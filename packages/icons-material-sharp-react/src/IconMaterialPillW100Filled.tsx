import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPillW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PillW100Filled'

      short_name='Pill'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m613-368 124-124q24-24 37.5-55.96T788-615q0-72.28-50.46-122.64T614.67-788Q580-788 548-774.5T492-737L368-613l245 245ZM345.33-172Q380-172 412-185.5t56-37.5l124-124-245-245-124 124q-24 24-37.5 55.96T172-345q0 72.28 50.46 122.64T345.33-172Z"/>
    </Icon>
  );
});

IconMaterialPillW100Filled.displayName = 'OnesyIconMaterialPillW100Filled';

export default IconMaterialPillW100Filled;
