import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFormatH1W100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatH1W100Filled'

      short_name='FormatH1'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M239.96-306q-5.96 0-9.96-4.02-4-4.03-4-9.98v-320q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v146h212v-146q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v320q0 5.95-4.04 9.98-4.03 4.02-10 4.02-5.96 0-9.96-4.02-4-4.03-4-9.98v-146H254v146q0 5.95-4.04 9.98-4.03 4.02-10 4.02Zm428 0q-5.96 0-9.96-4.02-4-4.03-4-9.98v-306h-66q-5.95 0-9.97-4.04-4.03-4.03-4.03-10 0-5.96 4.03-9.96 4.02-4 9.97-4h63.51q13.49 0 21.99 8.62 8.5 8.63 8.5 21.38v304q0 5.95-4.04 9.98-4.03 4.02-10 4.02Z"/>
    </Icon>
  );
});

IconMaterialFormatH1W100Filled.displayName = 'OnesyIconMaterialFormatH1W100Filled';

export default IconMaterialFormatH1W100Filled;
