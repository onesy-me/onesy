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
      <path d="M212-232v-52q0-22 13.5-41.5T262-356q55-26 109.5-39T480-408q29 0 58 3.75T596-393v161H212Zm268-280q-44.55 0-76.27-31.72Q372-575.45 372-620t31.73-76.28Q435.45-728 480-728t76.28 31.72Q588-664.55 588-620t-31.72 76.28Q524.55-512 480-512ZM746-98v-138h-50v-178h142l-71 140h68L746-98Z"/>
    </Icon>
  );
});

IconMaterialRecentPatientW100Filled.displayName = 'OnesyIconMaterialRecentPatientW100Filled';

export default IconMaterialRecentPatientW100Filled;
