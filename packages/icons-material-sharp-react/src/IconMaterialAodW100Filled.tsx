import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAodW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AodW100Filled'

      short_name='Aod'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M376-396v-28h208v28H376Zm-40-120v-28h288v28H336ZM252-92v-776h456v776H252Zm28-122h400v-532H280v532Z"/>
    </Icon>
  );
});

IconMaterialAodW100Filled.displayName = 'OnesyIconMaterialAodW100Filled';

export default IconMaterialAodW100Filled;
