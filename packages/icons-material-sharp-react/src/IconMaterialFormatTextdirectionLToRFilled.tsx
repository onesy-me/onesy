import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFormatTextdirectionLToRFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatTextdirectionLToRFilled'

      short_name='FormatTextdirectionLToR'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M360-360v-200q-66 0-113-47t-47-113q0-66 47-113t113-47h320v80h-80v440h-80v-440h-80v440h-80ZM680-80l-56-56 64-64H120v-80h568l-64-64 56-56 160 160L680-80Z"/>
    </Icon>
  );
});

IconMaterialFormatTextdirectionLToRFilled.displayName = 'OnesyIconMaterialFormatTextdirectionLToRFilled';

export default IconMaterialFormatTextdirectionLToRFilled;
