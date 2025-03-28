import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRecentPatientW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RecentPatientW100Filled'

      short_name='RecentPatient'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M242-232q-13 0-21.5-8.5T212-262v-22q0-22 13.5-41.5T262-356q55-26 109.5-39T480-408q23.03 0 45.02 2 21.98 2 44.98 7 11.24 1.6 18.62 10.8Q596-379 596-367v105q0 12.75-8.62 21.37Q578.75-232 566-232H242Zm238-280q-44.55 0-76.27-31.72Q372-575.45 372-620t31.73-76.28Q435.45-728 480-728t76.28 31.72Q588-664.55 588-620t-31.72 76.28Q524.55-512 480-512Zm266 276h-20q-12.75 0-21.37-8.53-8.63-8.53-8.63-21.15v-118.71q0-12.61 8.63-21.11 8.62-8.5 21.37-8.5h75q12.63 0 19.31 11 6.69 11 .69 22l-54 107h32q13 0 19.5 11t.5 22l-59 115q-3 5-8.5 4t-5.5-7v-107Z"/>
    </Icon>
  );
});

IconMaterialRecentPatientW100Filled.displayName = 'OnesyIconMaterialRecentPatientW100Filled';

export default IconMaterialRecentPatientW100Filled;
