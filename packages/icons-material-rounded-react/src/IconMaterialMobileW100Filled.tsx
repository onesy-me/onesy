import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMobileW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MobileW100Filled'

      short_name='Mobile'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M312-92q-24.75 0-42.37-17.63Q252-127.25 252-152v-656q0-26 17-43t43-17h340q24.75 0 42.38 17.62Q712-832.75 712-808v130q14 0 25 9.5t11 23.5v68q0 14-11 23.5t-25 9.5v392q0 24.75-17.62 42.37Q676.75-92 652-92H312Zm170.07-612q11.93 0 19.93-8.07t8-20q0-11.93-8.07-19.93t-20-8Q470-760 462-751.93t-8 20q0 11.93 8.07 19.93t20 8Z"/>
    </Icon>
  );
});

IconMaterialMobileW100Filled.displayName = 'OnesyIconMaterialMobileW100Filled';

export default IconMaterialMobileW100Filled;
