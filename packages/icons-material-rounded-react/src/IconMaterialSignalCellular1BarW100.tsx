import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSignalCellular1BarW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SignalCellular1BarW100'

      short_name='SignalCellular1Bar'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M186-132q-11 0-16.5-7t-5.5-16q0-5 1-8t5-7l620-620q4-4 7-5t8-1q9 0 16 5.5t7 16.5v612q0 13-8.5 21.5T798-132H186Zm177-28h437v-600L363-323v163Z"/>
    </Icon>
  );
});

IconMaterialSignalCellular1BarW100.displayName = 'OnesyIconMaterialSignalCellular1BarW100';

export default IconMaterialSignalCellular1BarW100;
