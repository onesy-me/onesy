import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFormatUnderlinedW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatUnderlinedW100'

      short_name='FormatUnderlined'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M250-211q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h460q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H250Zm230-118q-81 0-127.5-46.5T306-503v-280q0-5.76 4.25-9.88 4.24-4.12 10-4.12 5.75 0 9.75 4.12t4 9.88v280q0 68 39 107t107 39q68 0 107-39t39-107v-280q0-5.76 4.25-9.88 4.24-4.12 10-4.12 5.75 0 9.75 4.12t4 9.88v280q0 81-46.5 127.5T480-329Z"/>
    </Icon>
  );
});

IconMaterialFormatUnderlinedW100.displayName = 'OnesyIconMaterialFormatUnderlinedW100';

export default IconMaterialFormatUnderlinedW100;
