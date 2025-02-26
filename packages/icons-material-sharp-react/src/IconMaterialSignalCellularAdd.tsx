import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSignalCellularAdd = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SignalCellularAdd'

      short_name='SignalCellularAdd'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m80-80 799-799v425q-18-11-38-17.5T799-482v-204L273-160h255q8 23 20 43t27 37H80Zm640 0v-120H600v-80h120v-120h80v120h120v80H800v120h-80Zm-447-80 526-526-136.5 136.5-121 121L418-305 273-160Z"/>
    </Icon>
  );
});

IconMaterialSignalCellularAdd.displayName = 'OnesyIconMaterialSignalCellularAdd';

export default IconMaterialSignalCellularAdd;
