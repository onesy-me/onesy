import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHeatPumpBalance = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HeatPumpBalance'

      short_name='HeatPumpBalance'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-696h80v400h80v-400h240v400h80v-440h167l-47-47 56-57 144 144-144 143-56-57 47-46h-87v440H480v-400h-80v400H160v-480ZM40-96v-400h880v400H40Zm80-80h720v-240H120v240Zm720-240H120h720Z"/>
    </Icon>
  );
});

IconMaterialHeatPumpBalance.displayName = 'OnesyIconMaterialHeatPumpBalance';

export default IconMaterialHeatPumpBalance;
