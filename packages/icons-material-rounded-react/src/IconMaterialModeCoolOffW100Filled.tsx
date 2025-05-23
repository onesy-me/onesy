import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialModeCoolOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ModeCoolOffW100Filled'

      short_name='ModeCoolOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M494-309v189q0 6-4 10t-10 4q-6 0-10-4t-4-10v-188L320-164q-5 4-10 4.5t-10-4.5q-5-5-5-10t5-10l159-160-116-116-159 160q-5 5-10 5t-10-5q-4-4-4-9.5t4-10.5l144-146H120q-6 0-10-4t-4-10q0-6 4-10t10-4h189L96-707q-4-4-4.5-9.5T96-727q5-5 10-5t10 5L764-79q4 4 4.5 9.5T764-59q-5 5-10 5t-10-5L494-309Zm116-157h-88l-56-56v-88L300-776q-5-5-5-10t5-10q4-4 9.5-4t10.5 4l146 144v-188q0-6 4-10t10-4q6 0 10 4t4 10v188l146-144q5-4 10-4.5t10 4.5q5 5 5 10t-5 10L494-610v116h116l166-166q5-5 10-5t10 5q4 4 4 9.5t-4 10.5L652-494h188q6 0 10 4t4 10q0 6-4 10t-10 4H652l144 146q2 2 3 4.5t1 5.5q0 3-1 5.5t-3 4.5q-5 5-10 5t-10-5L610-466Z"/>
    </Icon>
  );
});

IconMaterialModeCoolOffW100Filled.displayName = 'OnesyIconMaterialModeCoolOffW100Filled';

export default IconMaterialModeCoolOffW100Filled;
