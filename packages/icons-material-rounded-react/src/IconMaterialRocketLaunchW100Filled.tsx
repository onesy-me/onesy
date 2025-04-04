import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRocketLaunchW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RocketLaunchW100Filled'

      short_name='RocketLaunch'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M288-447q25-54 56.5-102.5T413-643l-58-12q-15-3-29 1t-25 15L194-532q-11 11-8 27t18 22l84 36Zm475-343q-88 4-165.5 41T458-650q-40 40-71 87t-56 98q-5 10-5 20.5t8 18.5l96 95q8 8 18 8.5t20-4.5q51-24 98-56t87-72q62-62 99-139.5T793-760q0-6-2-11t-7-10q-5-5-10-7t-11-2ZM554-551q-16-16-16-38.5t16-38.5q16-16 38.5-16t38.5 16q16 16 16 38.5T631-551q-16 16-38.5 16T554-551ZM449-285l36 84q6 15 22 18t27-8l107-107q11-11 15-25.5t1-29.5l-12-57q-45 37-93.5 68.5T449-285Zm-230-28q20-20 48.5-19.5T316-312q20 20 20 48.5T316-215q-29 29-68 37.5T169-166q3-41 12-79.5t38-67.5Z"/>
    </Icon>
  );
});

IconMaterialRocketLaunchW100Filled.displayName = 'OnesyIconMaterialRocketLaunchW100Filled';

export default IconMaterialRocketLaunchW100Filled;
