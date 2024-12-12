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
      <path d="M466-320h28v-222h-28v222Zm14-280q8.5 0 14.25-5.75T500-620q0-8.5-5.75-14.25T480-640q-8.5 0-14.25 5.75T460-620q0 8.5 5.75 14.25T480-600Zm0 466q-115-36-191.5-142T212-516v-208l268-100 268 100v208q0 134-76.5 240T480-134Z"/>
    </Icon>
  );
});

IconMaterialPrivacyTipW100Filled.displayName = 'OnesyIconMaterialPrivacyTipW100Filled';

export default IconMaterialPrivacyTipW100Filled;
