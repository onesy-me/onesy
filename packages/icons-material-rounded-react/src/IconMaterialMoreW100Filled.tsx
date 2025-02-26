import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMoreW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MoreW100Filled'

      short_name='More'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M380-252q-22 0-41.5-10T306-290L197-445q-11-16-11-35t11-35l109-153q13-18 32-29t42-11h348q25 0 42.5 17.5T788-648v336q0 25-17.5 42.5T728-252H380Zm-6-200q11 0 19.5-8.5T402-480q0-11-8.5-19.5T374-508q-11 0-19.5 8.5T346-480q0 11 8.5 19.5T374-452Zm140 0q11 0 19.5-8.5T542-480q0-11-8.5-19.5T514-508q-11 0-19.5 8.5T486-480q0 11 8.5 19.5T514-452Zm140 0q11 0 19.5-8.5T682-480q0-11-8.5-19.5T654-508q-11 0-19.5 8.5T626-480q0 11 8.5 19.5T654-452Z"/>
    </Icon>
  );
});

IconMaterialMoreW100Filled.displayName = 'OnesyIconMaterialMoreW100Filled';

export default IconMaterialMoreW100Filled;
