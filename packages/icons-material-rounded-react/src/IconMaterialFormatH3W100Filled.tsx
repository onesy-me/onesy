import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFormatH3W100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatH3W100Filled'

      short_name='FormatH3'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M159.96-306q-5.96 0-9.96-4.02-4-4.03-4-9.98v-320q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v146h212v-146q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v320q0 5.95-4.04 9.98-4.03 4.02-10 4.02-5.96 0-9.96-4.02-4-4.03-4-9.98v-146H174v146q0 5.95-4.04 9.98-4.03 4.02-10 4.02ZM508-306q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h194q14 0 23-9t9-23v-100H588q-5.95 0-9.97-4.04-4.03-4.03-4.03-10 0-5.96 4.03-9.96 4.02-4 9.97-4h146v-100q0-14-9-23t-23-9H508q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h194q24.75 0 42.38 17.62Q762-618.75 762-594v228q0 24.75-17.62 42.37Q726.75-306 702-306H508Z"/>
    </Icon>
  );
});

IconMaterialFormatH3W100Filled.displayName = 'OnesyIconMaterialFormatH3W100Filled';

export default IconMaterialFormatH3W100Filled;
