import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMobileChargeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MobileChargeW100Filled'

      short_name='MobileCharge'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M312-92q-25 0-42.5-17.5T252-152v-656q0-26 17-43t43-17h340q25 0 42.5 17.5T712-808v130q14 0 25 9.5t11 23.5v68q0 14-11 23.5t-25 9.5v392q0 25-17.5 42.5T652-92H312Zm152-356v116q0 6 6 7.5t8-3.5l71-162q3-8-1-15t-12-7h-40v-116q0-6-6-7.5t-8 3.5l-71 162q-3 8 1 15t12 7h40Z"/>
    </Icon>
  );
});

IconMaterialMobileChargeW100Filled.displayName = 'OnesyIconMaterialMobileChargeW100Filled';

export default IconMaterialMobileChargeW100Filled;
