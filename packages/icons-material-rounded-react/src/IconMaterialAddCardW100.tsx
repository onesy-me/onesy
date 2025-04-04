import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAddCardW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddCardW100'

      short_name='AddCard'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M192-212q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h576q26 0 43 17t17 43v136.41q0 11.59-8.05 20.59T800-522H160v250q0 12 10 22t22 10h340q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H192Zm-32-386h640v-90q0-12-10-22t-22-10H192q-12 0-22 10t-10 22v90Zm626 372H680q-5.95 0-9.97-4.04-4.03-4.03-4.03-10 0-5.96 4.03-9.96 4.02-4 9.97-4h106v-106q0-5.95 4.04-9.98 4.03-4.02 10-4.02 5.96 0 9.96 4.02 4 4.03 4 9.98v106h106q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H814v106q0 5.95-4.04 9.97-4.03 4.03-10 4.03-5.96 0-9.96-4.03-4-4.02-4-9.97v-106Zm-626-14v-480 480Z"/>
    </Icon>
  );
});

IconMaterialAddCardW100.displayName = 'OnesyIconMaterialAddCardW100';

export default IconMaterialAddCardW100;
