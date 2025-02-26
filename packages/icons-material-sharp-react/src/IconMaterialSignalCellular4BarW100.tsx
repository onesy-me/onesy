import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSignalCellular4BarW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SignalCellular4BarW100'

      short_name='SignalCellular4Bar'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m132-132 696-696v696H132Z"/>
    </Icon>
  );
});

IconMaterialSignalCellular4BarW100.displayName = 'OnesyIconMaterialSignalCellular4BarW100';

export default IconMaterialSignalCellular4BarW100;
