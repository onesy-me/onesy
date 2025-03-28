import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEnergySavingsLeafW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EnergySavingsLeafW100'

      short_name='EnergySavingsLeaf'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M481-240q100 0 169-70.5T720-481v-207q0-14-9-23t-23-9H481q-100 1-170.5 70T240-481q0 100 70.29 170.5T481-240Zm-37.44-104.16 144.38-129.52Q595-480 592-488.5T579-499l-113-10 69-94q2-3 1.5-7t-2.5-7q-4-4-8.68-3.61-4.68.4-8.58 3.54L374.02-488.28Q367-482 369.5-473t12.5 11l113 10-68 94q-2 3-1.5 7t3 7q2.5 3 6.82 3 4.31 0 8.24-3.16ZM481-212q-52.03 0-98.01-18.5Q337-249 301-281l-65 65q-2.09 2-4.7 3-2.6 1-5.39 1-5.91 0-9.91-4.07-4-4.08-4-10.1 0-2.83 1-5.33t3-4.5l65-65q-32-36-50.5-81.99Q212-428.97 212-481q0-111.81 78.5-189.4Q369-748 481-748h207q24.75 0 42.38 17.62Q748-712.75 748-688v207q0 112-77.6 190.5Q592.81-212 481-212Zm-1-268Z"/>
    </Icon>
  );
});

IconMaterialEnergySavingsLeafW100.displayName = 'OnesyIconMaterialEnergySavingsLeafW100';

export default IconMaterialEnergySavingsLeafW100;
