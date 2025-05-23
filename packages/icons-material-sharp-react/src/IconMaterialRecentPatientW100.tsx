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
      <path d="M212-232v-52q0-22 13.5-41.5T262-356q55-26 109.5-39T480-408q29 0 58 3.75T596-393v28q-29-8-58-11.5t-58-3.5q-52.63 0-104.31 12.5Q324-355 276-332q-17 9-26.5 21.5T240-284v24h356v28H212Zm28-28h356-356Zm240-252q-44.55 0-76.27-31.72Q372-575.45 372-620t31.73-76.28Q435.45-728 480-728t76.28 31.72Q588-664.55 588-620t-31.72 76.28Q524.55-512 480-512Zm0-28q33 0 56.5-23.5T560-620q0-33-23.5-56.5T480-700q-33 0-56.5 23.5T400-620q0 33 23.5 56.5T480-540Zm0-80ZM746-98v-138h-50v-178h142l-71 140h68L746-98Z"/>
    </Icon>
  );
});

IconMaterialRecentPatientW100.displayName = 'OnesyIconMaterialRecentPatientW100';

export default IconMaterialRecentPatientW100;
