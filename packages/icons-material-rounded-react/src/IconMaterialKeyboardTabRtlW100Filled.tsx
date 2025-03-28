import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialKeyboardTabRtlW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyboardTabRtlW100Filled'

      short_name='KeyboardTabRtl'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M145.96-266q-5.96 0-9.96-4.02-4-4.03-4-9.98v-400q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v400q0 5.95-4.04 9.98-4.03 4.02-10 4.02ZM313-466l160 160q4 4 4.5 10t-4.5 10q-4 4-9.5 4t-9.5-4L281-459q-5-5-7-10.13-2-5.14-2-11 0-5.87 2-10.87 2-5 7-10l172-173q3.67-4 9.33-4 5.67 0 9.5 3.83 4.17 4.17 4.67 9.67T473-655L314-494h500q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H313Z"/>
    </Icon>
  );
});

IconMaterialKeyboardTabRtlW100Filled.displayName = 'OnesyIconMaterialKeyboardTabRtlW100Filled';

export default IconMaterialKeyboardTabRtlW100Filled;
