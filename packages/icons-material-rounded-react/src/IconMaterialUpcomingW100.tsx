import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialUpcomingW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='UpcomingW100'

      short_name='Upcoming'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M192-172q-25 0-42.5-17.5T132-232v-136q0-25 17.5-42.5T192-428h104q9 0 16 5t11 13q21 47 63.5 74.5T480-308q52 0 94.5-27.5T637-410q4-8 11.5-13t16.5-5h103q25 0 42.5 17.5T828-368v136q0 25-17.5 42.5T768-172H192Zm0-28h576q12 0 22-10t10-22v-136q0-12-10-22t-22-10H664q-26 55-75 87.5T480-280q-60 0-109-32.5T296-400H192q-12 0-22 10t-10 22v136q0 12 10 22t22 10Zm492-344q-5-5-5-10t5-10l86-86q4-4 9.5-4.5T790-650q5 5 5 10t-5 10l-86 86q-4 4-9.5 4.5T684-544Zm-408 0q-5 5-10 5t-10-5l-86-86q-4-4-4.5-9.5T170-650q5-5 10-5t10 5l86 86q4 4 4.5 9.5T276-544Zm204-94q-6 0-10-4t-4-10v-120q0-6 4-10t10-4q6 0 10 4t4 10v120q0 6-4 10t-10 4ZM192-200h-32 640-608Z"/>
    </Icon>
  );
});

IconMaterialUpcomingW100.displayName = 'OnesyIconMaterialUpcomingW100';

export default IconMaterialUpcomingW100;
