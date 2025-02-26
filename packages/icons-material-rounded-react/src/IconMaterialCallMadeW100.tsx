import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCallMadeW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CallMadeW100'

      short_name='CallMade'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M680-660 242-222q-4 4-9.5 4.5T222-222q-5-5-5-10t5-10l438-438H374q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h304q12.75 0 21.38 8.62Q708-690.75 708-678v304q0 5.95-4.04 9.98-4.03 4.02-10 4.02-5.96 0-9.96-4.02-4-4.03-4-9.98v-286Z"/>
    </Icon>
  );
});

IconMaterialCallMadeW100.displayName = 'OnesyIconMaterialCallMadeW100';

export default IconMaterialCallMadeW100;
