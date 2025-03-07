import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialUpcomingW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='UpcomingW100Filled'

      short_name='Upcoming'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M192-172q-24.75 0-42.37-17.63Q132-207.25 132-232v-136q0-24.75 17.63-42.38Q167.25-428 192-428h103.85q9.39 0 16.27 5 6.88 5 10.88 13 21 47 63.5 74.5t94 27.5q51.5 0 94-27.5T637-410q4-8 11.5-13t16.78-5H768q24.75 0 42.38 17.62Q828-392.75 828-368v136q0 24.75-17.62 42.37Q792.75-172 768-172H192Zm492-372q-5-5-5-10t5-10l86-86q4-4 9.5-4.5T790-650q5 5 5 10t-5 10l-86 86q-4 4-9.5 4.5T684-544Zm-408 0q-5 5-10 5t-10-5l-86-86q-4-4-4.5-9.5T170-650q5-5 10-5t10 5l86 86q4 4 4.5 9.5T276-544Zm203.96-94q-5.96 0-9.96-4.03-4-4.02-4-9.97v-120q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v120q0 5.95-4.04 9.97-4.03 4.03-10 4.03Z"/>
    </Icon>
  );
});

IconMaterialUpcomingW100Filled.displayName = 'OnesyIconMaterialUpcomingW100Filled';

export default IconMaterialUpcomingW100Filled;
