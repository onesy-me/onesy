import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSignalCellular3Bar = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SignalCellular3Bar'

      short_name='SignalCellular3Bar'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m80-80 800-800v800H80Zm520-80h200v-526L600-486v326Z"/>
    </Icon>
  );
});

IconMaterialSignalCellular3Bar.displayName = 'OnesyIconMaterialSignalCellular3Bar';

export default IconMaterialSignalCellular3Bar;
