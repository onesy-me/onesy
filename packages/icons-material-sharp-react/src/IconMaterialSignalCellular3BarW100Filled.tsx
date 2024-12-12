import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSignalCellular3BarW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SignalCellular3BarW100Filled'

      short_name='SignalCellular3Bar'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m132-132 696-696v696H132Zm431-28h237v-600L563-523v363Z"/>
    </Icon>
  );
});

IconMaterialSignalCellular3BarW100Filled.displayName = 'OnesyIconMaterialSignalCellular3BarW100Filled';

export default IconMaterialSignalCellular3BarW100Filled;
