import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPriceCheckW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PriceCheckW100Filled'

      short_name='PriceCheck'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m558-196 218-218q4-4 9.5-4.5T796-414q5 5 5 10t-5 10L579-177q-9 9-21 9t-21-9L434-280q-4-4-4.5-9.5T434-300q5-5 10-5t10 5l104 104ZM286-400v-26h-86q-6 0-10-4t-4-10q0-6 4-10t10-4h186v-132H214q-11 0-19.5-8.5T186-614v-132q0-11 8.5-19.5T214-774h72v-26q0-6 4-10t10-4q6 0 10 4t4 10v26h86q6 0 10 4t4 10q0 6-4 10t-10 4H214v132h172q11 0 19.5 8.5T414-586v132q0 11-8.5 19.5T386-426h-72v26q0 6-4 10t-10 4q-6 0-10-4t-4-10Z"/>
    </Icon>
  );
});

IconMaterialPriceCheckW100Filled.displayName = 'OnesyIconMaterialPriceCheckW100Filled';

export default IconMaterialPriceCheckW100Filled;
