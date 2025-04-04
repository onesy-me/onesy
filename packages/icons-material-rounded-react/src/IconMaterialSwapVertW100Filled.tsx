import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSwapVertW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwapVertW100Filled'

      short_name='SwapVert'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M376.96-477q-5.96 0-9.96-4.02-4-4.03-4-9.98v-284L242-654q-3.5 4-8.75 4T223-654.78q-5-5.22-5-10.22 0-5 5-10l132-132q5-5 10.13-7 5.14-2 11-2 5.87 0 11.47 2.05 5.6 2.04 10.4 6.95l133 133q4 4 4.5 9t-4.5 10.22q-5 4.78-10 4.78t-10-5L391-775v285q0 5.52-4.04 9.26-4.03 3.74-10 3.74Zm206.91 332q-5.87 0-11.47-2.05-5.6-2.04-10.4-6.95L429-287q-4-4-4.5-9t4.5-10.22q5-4.78 10-4.78t10 5l120 120v-285q0-5.52 4.04-9.26 4.03-3.74 10-3.74 5.96 0 9.96 4.02 4 4.03 4 9.98v284l121-121q3.5-4 8.75-4t10.25 4.78q5 5.22 5 10.22 0 5-5 10L605-154q-5 5-10.13 7-5.14 2-11 2Z"/>
    </Icon>
  );
});

IconMaterialSwapVertW100Filled.displayName = 'OnesyIconMaterialSwapVertW100Filled';

export default IconMaterialSwapVertW100Filled;
