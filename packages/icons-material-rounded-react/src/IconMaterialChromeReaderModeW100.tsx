import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialChromeReaderModeW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChromeReaderModeW100'

      short_name='ChromeReaderMode'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M192-212q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h576q26 0 43 17t17 43v416q0 26-17 43t-43 17H192Zm0-28h274v-480H192q-12 0-22 10t-10 22v416q0 12 10 22t22 10Zm302 0h274q12 0 22-10t10-22v-416q0-12-10-22t-22-10H494v480Zm248-136q6 0 10-4t4-10q0-6-4-10t-10-4H552q-6 0-10 4t-4 10q0 6 4 10t10 4h190Zm0-100q6 0 10-4t4-10q0-6-4-10t-10-4H552q-6 0-10 4t-4 10q0 6 4 10t10 4h190Zm0-100q6 0 10-4t4-10q0-6-4-10t-10-4H552q-6 0-10 4t-4 10q0 6 4 10t10 4h190ZM160-240v-480 480Z"/>
    </Icon>
  );
});

IconMaterialChromeReaderModeW100.displayName = 'OnesyIconMaterialChromeReaderModeW100';

export default IconMaterialChromeReaderModeW100;
