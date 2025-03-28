import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSkipPreviousW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SkipPreviousW100Filled'

      short_name='SkipPrevious'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M284-326v-308q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v308q0 5.95-4.04 9.98-4.03 4.02-10 4.02-5.96 0-9.96-4.02-4-4.03-4-9.98Zm345-17L461-455q-7-5-10-11t-3-14q0-8 3-14t10-11l168-112q4-3 8-4t9-1q12 0 21 8.25t9 21.75v224q0 13.5-9 21.75T646-338q-5 0-9-1t-8-4Z"/>
    </Icon>
  );
});

IconMaterialSkipPreviousW100Filled.displayName = 'OnesyIconMaterialSkipPreviousW100Filled';

export default IconMaterialSkipPreviousW100Filled;
