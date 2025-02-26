import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNoSim = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoSim'

      short_name='NoSim'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m800-273-80-80v-447H434l-80 80-58-56 104-104h400v607Zm20 245L240-608v448h480v-81l80 80v81H160v-560l24-24L28-820l57-56L876-85l-56 57ZM541-533Zm-75 152Z"/>
    </Icon>
  );
});

IconMaterialNoSim.displayName = 'OnesyIconMaterialNoSim';

export default IconMaterialNoSim;
