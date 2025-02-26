import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSignalCellular2BarW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SignalCellular2BarW100Filled'

      short_name='SignalCellular2Bar'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m132-132 696-696v696H132Zm351-28h317v-600L483-443v283Z"/>
    </Icon>
  );
});

IconMaterialSignalCellular2BarW100Filled.displayName = 'OnesyIconMaterialSignalCellular2BarW100Filled';

export default IconMaterialSignalCellular2BarW100Filled;
