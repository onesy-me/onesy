import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialKeyboardTabRtlFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyboardTabRtlFilled'

      short_name='KeyboardTabRtl'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-240q-17 0-28.5-11.5T80-280v-400q0-17 11.5-28.5T120-720q17 0 28.5 11.5T160-680v400q0 17-11.5 28.5T120-240Zm273-200 115 115q12 12 12 28.5T508-268q-12 11-28.5 11T452-268L268-452q-6-6-8.5-13t-2.5-15q0-8 2.5-15t8.5-13l184-184q11-11 28-11t28 11q12 12 11.5 28.5T508-636L393-520h447q17 0 28.5 11.5T880-480q0 17-11.5 28.5T840-440H393Z"/>
    </Icon>
  );
});

IconMaterialKeyboardTabRtlFilled.displayName = 'OnesyIconMaterialKeyboardTabRtlFilled';

export default IconMaterialKeyboardTabRtlFilled;
