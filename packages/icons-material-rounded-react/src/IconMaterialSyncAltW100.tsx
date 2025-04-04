import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSyncAltW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SyncAltW100'

      short_name='SyncAlt'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m186-306 120 120q4 4 4.5 9.5T306-166q-5 5-10 5t-10-5L153-299q-5-5-7-10t-2-11q0-6 2-11t7-10l133-133q4-4 9.5-4.5T306-474q5 5 5 10t-5 10L186-334h588q6 0 10 4t4 10q0 6-4 10t-10 4H186Zm588-320H186q-6 0-10-4t-4-10q0-6 4-10t10-4h588L654-774q-4-4-4.5-9.5T654-794q5-5 10-5t10 5l133 133q5 5 7 10t2 11q0 6-2 11t-7 10L674-486q-4 4-9.5 4.5T654-486q-5-5-5-10t5-10l120-120Z"/>
    </Icon>
  );
});

IconMaterialSyncAltW100.displayName = 'OnesyIconMaterialSyncAltW100';

export default IconMaterialSyncAltW100;
