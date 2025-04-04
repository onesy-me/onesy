import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialChairW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChairW100Filled'

      short_name='Chair'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M202-206q-6 0-10-4t-4-10v-40h-28q-29 0-48.5-19.5T92-328v-200q0-23 15.5-38.5T146-582q23 0 38.5 15.5T200-528v134h560v-134q0-23 15.5-38.5T814-582q23 0 38.5 15.5T868-528v200q0 29-19.5 48.5T800-260h-28v40q0 5-3.5 9.5T760-206q-6 0-10-4t-4-10v-40H216v40q0 6-4 10t-10 4Zm26-216v-106q0-32-19-57t-49-25v-46q0-29 19.5-48.5T228-724h504q29 0 48.5 19.5T800-656v46q-30 1-49 25.5T732-528v106H228Z"/>
    </Icon>
  );
});

IconMaterialChairW100Filled.displayName = 'OnesyIconMaterialChairW100Filled';

export default IconMaterialChairW100Filled;
