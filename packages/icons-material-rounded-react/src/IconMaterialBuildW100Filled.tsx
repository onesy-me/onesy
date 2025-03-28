import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBuildW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BuildW100Filled'

      short_name='Build'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M354-386q-89 0-151.5-62.5T140-600q0-11 1.5-22.5T145-645q2-8 7-11.5t12-5.5q7-2 13.5 0t11.5 7l109 107 108-108-106-107q-5-5-7-12t0-14q2-7 6-12t11-7q11-3 22-4.5t22-1.5q89 0 151.5 62.5T568-600q0 29-6 53t-18 45l242 242q19 19 19 46t-19 46q-19 19-46 19t-46-19L452-410q-23 11-47 17.5t-51 6.5Z"/>
    </Icon>
  );
});

IconMaterialBuildW100Filled.displayName = 'OnesyIconMaterialBuildW100Filled';

export default IconMaterialBuildW100Filled;
