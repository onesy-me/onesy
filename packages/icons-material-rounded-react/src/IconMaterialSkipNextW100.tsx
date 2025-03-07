import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSkipNextW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SkipNextW100'

      short_name='SkipNext'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M648-326v-308q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v308q0 5.95-4.04 9.98-4.03 4.02-10 4.02-5.96 0-9.96-4.02-4-4.03-4-9.98Zm-364-42v-224q0-13.5 9-21.75t21-8.25q5 0 9 1t8 4l168 112q7 5 10 11t3 14q0 8-3 14t-10 11L331-343q-4 3-8 4t-9 1q-12 0-21-8.25T284-368Zm28-112Zm0 116 174-116-174-116v232Z"/>
    </Icon>
  );
});

IconMaterialSkipNextW100.displayName = 'OnesyIconMaterialSkipNextW100';

export default IconMaterialSkipNextW100;
