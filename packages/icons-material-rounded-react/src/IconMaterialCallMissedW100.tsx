import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCallMissedW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CallMissedW100'

      short_name='CallMissed'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-585v206q0 6-4 10t-10 4q-6 0-10-4t-4-10v-224q0-13 8.5-21.5T202-633h224q6 0 10 4t4 10q0 6-4 10t-10 4H220l242 242q9 9 23 9t23-9l251-251q4-4 9.5-4.5T779-614q5 5 5 10t-5 10L527-342q-9 9-20 13t-22 4q-11 0-22-4t-20-13L200-585Z"/>
    </Icon>
  );
});

IconMaterialCallMissedW100.displayName = 'OnesyIconMaterialCallMissedW100';

export default IconMaterialCallMissedW100;
