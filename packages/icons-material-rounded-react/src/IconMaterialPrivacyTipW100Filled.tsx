import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPrivacyTipW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PrivacyTipW100Filled'

      short_name='PrivacyTip'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480.04-320q5.96 0 9.96-4.02 4-4.03 4-9.98v-194q0-5.95-4.04-9.97-4.03-4.03-10-4.03-5.96 0-9.96 4.03-4 4.02-4 9.97v194q0 5.95 4.04 9.98 4.03 4.02 10 4.02ZM480-600q8.5 0 14.25-5.75T500-620q0-8.5-5.75-14.25T480-640q-8.5 0-14.25 5.75T460-620q0 8.5 5.75 14.25T480-600Zm0 461q-5 0-11-1t-11.02-3Q345-188 278.5-291.5 212-395 212-516v-166q0-19.26 10.88-34.66Q233.75-732.07 251-739l208-77q11-4 21-4t21 4l208 77q17.25 6.93 28.13 22.34Q748-701.26 748-682v166q0 121-66.5 224.5T502.02-143q-5.02 2-11.02 3t-11 1Z"/>
    </Icon>
  );
});

IconMaterialPrivacyTipW100Filled.displayName = 'OnesyIconMaterialPrivacyTipW100Filled';

export default IconMaterialPrivacyTipW100Filled;
