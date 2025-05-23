import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSignalCellularNullFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SignalCellularNullFilled'

      short_name='SignalCellularNull'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m80-80 800-800v800H80Zm193-80h527v-526L273-160Z"/>
    </Icon>
  );
});

IconMaterialSignalCellularNullFilled.displayName = 'OnesyIconMaterialSignalCellularNullFilled';

export default IconMaterialSignalCellularNullFilled;
