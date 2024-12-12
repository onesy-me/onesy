import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSignalCellular1BarW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SignalCellular1BarW100Filled'

      short_name='SignalCellular1Bar'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m132-132 696-696v696H132Zm231-28h437v-600L363-323v163Z"/>
    </Icon>
  );
});

IconMaterialSignalCellular1BarW100Filled.displayName = 'OnesyIconMaterialSignalCellular1BarW100Filled';

export default IconMaterialSignalCellular1BarW100Filled;
