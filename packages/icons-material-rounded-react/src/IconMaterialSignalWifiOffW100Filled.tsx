import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSignalWifiOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SignalWifiOffW100Filled'

      short_name='SignalWifiOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M680-406q-6 0-11-2t-10-7L373-700q-4-4-5.5-8t-1.5-9q0-8 5.5-15t15.5-9q23-3 46.5-5t46.5-2q103 0 199.5 32.5T858-621q6 5 9.5 11t3.5 13q0 5-2 10.5t-7 10.5L701-415q-5 5-10 7t-11 2Zm119 285L603-317 501-215q-9 9-21 9t-21-9L99-575q-10-10-9-24t12-22q35-26 64.5-43.5T225-695L120-800q-4-4-4.5-9.5T120-820q5-5 10-5t10 5l679 679q4 4 4.5 9.5T819-121q-5 5-10 5t-10-5Z"/>
    </Icon>
  );
});

IconMaterialSignalWifiOffW100Filled.displayName = 'OnesyIconMaterialSignalWifiOffW100Filled';

export default IconMaterialSignalWifiOffW100Filled;
