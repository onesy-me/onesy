import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialKeyboardExternalInputW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyboardExternalInputW100Filled'

      short_name='KeyboardExternalInput'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M212-508v56h56v-56h-56Zm120 0v56h56v-56h-56Zm120 0v56h56v-56h-56ZM212-628v56h56v-56h-56Zm120 0v56h56v-56h-56Zm120 0v56h56v-56h-56Zm120 0v56h56v-56h-56Zm120 0v56h56v-56h-56Zm12 485-19-19 88-90H570v-28h203l-88-90 19-19 123 123-123 123ZM132-252v-456h696v256q-18-12-38.5-20T748-485v-23h-56v19.13q-17 .87-33 4.37t-31 8.5v-32h-56v56h8q-19 13-34.5 29T517-388H332v56h159q-5.38 15.78-7.69 32.39Q481-283 481-266v14H132Z"/>
    </Icon>
  );
});

IconMaterialKeyboardExternalInputW100Filled.displayName = 'OnesyIconMaterialKeyboardExternalInputW100Filled';

export default IconMaterialKeyboardExternalInputW100Filled;
