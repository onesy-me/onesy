import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRecentPatientW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RecentPatientW100'

      short_name='RecentPatient'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M242-232q-13 0-21.5-8.5T212-262v-22q0-22 13.5-41.5T262-356q55-26 109.5-39T480-408q26 0 52 3t52 9q5 2 8.5 6.11 3.5 4.1 3.5 9.82 0 6.07-4.6 9.57T581-369q-25-6-50-8.5t-51-2.5q-52.63 0-104.31 12.5Q324-355 276-332q-17 9-26.5 21.5T240-284v24h342q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H242Zm-2-28h356-356Zm240-252q-44.55 0-76.27-31.72Q372-575.45 372-620t31.73-76.28Q435.45-728 480-728t76.28 31.72Q588-664.55 588-620t-31.72 76.28Q524.55-512 480-512Zm0-28q33 0 56.5-23.5T560-620q0-33-23.5-56.5T480-700q-33 0-56.5 23.5T400-620q0 33 23.5 56.5T480-540Zm0-80Zm266 384h-20q-12.75 0-21.37-8.53-8.63-8.53-8.63-21.15v-118.71q0-12.61 8.63-21.11 8.62-8.5 21.37-8.5h75q12.63 0 19.31 11 6.69 11 .69 22l-54 107h32q13 0 19.5 11t.5 22l-59 115q-3 5-8.5 4t-5.5-7v-107Z"/>
    </Icon>
  );
});

IconMaterialRecentPatientW100.displayName = 'OnesyIconMaterialRecentPatientW100';

export default IconMaterialRecentPatientW100;
