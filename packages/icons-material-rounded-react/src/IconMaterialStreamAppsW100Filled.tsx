import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialStreamAppsW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StreamAppsW100Filled'

      short_name='StreamApps'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m619-376-27 27q-7 7-16.5 3.46T566-359v-214.59q0-13.41 8.63-21.91 8.62-8.5 21.37-8.5h230q12.75 0 21.38 8.62Q856-586.75 856-574v168q0 12.75-8.62 21.37Q838.75-376 826-376H619ZM312-92q-24.75 0-42.37-17.63Q252-127.25 252-152v-656q0-24.75 17.63-42.38Q287.25-868 312-868h336q24.75 0 42.38 17.62Q708-832.75 708-808v110q0 5.95-4.04 9.97-4.03 4.03-10 4.03-5.96 0-9.96-4.03-4-4.02-4-9.97v-48H280v532h400v-48q0-5.95 4.04-9.98 4.03-4.02 10-4.02 5.96 0 9.96 4.02 4 4.03 4 9.98v110q0 24.75-17.62 42.37Q672.75-92 648-92H312Z"/>
    </Icon>
  );
});

IconMaterialStreamAppsW100Filled.displayName = 'OnesyIconMaterialStreamAppsW100Filled';

export default IconMaterialStreamAppsW100Filled;
