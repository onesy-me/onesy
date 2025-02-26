import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSignalWifiBadW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SignalWifiBadW100Filled'

      short_name='SignalWifiBad'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-194 74-600q85-73 189.5-110.5T480-748q112 0 216.5 37.5T886-600l-65 65q-18-6-37-9t-38-3q-96 0-163 67t-67 163q0 19 3 38t9 37l-48 48Zm181-20-19-19 84-84-84-84 19-19 84 84 84-84 20 19-84 84 83 84-19 19-84-83-84 83Z"/>
    </Icon>
  );
});

IconMaterialSignalWifiBadW100Filled.displayName = 'OnesyIconMaterialSignalWifiBadW100Filled';

export default IconMaterialSignalWifiBadW100Filled;
