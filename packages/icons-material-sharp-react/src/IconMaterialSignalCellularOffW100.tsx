import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSignalCellularOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SignalCellularOffW100'

      short_name='SignalCellularOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-160h560L480-440 200-160Zm642 82-54-54H132l328-328-299-299 20-20L862-98l-20 20Zm-14-166-28-28v-488L556-516l-20-20 292-292v584ZM678-394Zm-58 94Z"/>
    </Icon>
  );
});

IconMaterialSignalCellularOffW100.displayName = 'OnesyIconMaterialSignalCellularOffW100';

export default IconMaterialSignalCellularOffW100;
