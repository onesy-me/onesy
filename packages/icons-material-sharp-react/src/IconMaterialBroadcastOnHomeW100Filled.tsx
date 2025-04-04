import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBroadcastOnHomeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BroadcastOnHomeW100Filled'

      short_name='BroadcastOnHome'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M828-665q-7-4-13.5-7.5T800-679v-121H212v-28h616v163ZM132-292v-356h204v356H132Zm534 120v-197q-9-4-14.5-12.5T646-400q0-14.28 10.14-24.14Q666.28-434 679.8-434q14.2 0 24.2 9.86T714-400q0 10-5 18t-15 13v197h-28Zm-149-48q-39-35-60-82.17-21-47.18-21-97.83 0-102.29 71.26-173.15Q578.53-644 679.79-644 782-644 853-573.15q71 70.86 71 173.15 0 51-20.5 98.5T843-221l-18-19q35-30 53-72.16T896-400q0-90.72-62.71-153.36Q770.57-616 679.75-616 590-616 527-553.36T464-400q0 46 18.5 88t53.5 73l-19 19Zm70-71q-23-22-37-50.03-14-28.04-14-58.97 0-60.3 42.24-102.15Q620.48-544 679.79-544 740-544 782-502.15 824-460.3 824-400q0 32-13.5 60.5T773-290l-20-20q20-17 31.5-40.46Q796-373.93 796-400q0-48.72-33.64-82.36T680-516q-48 0-82 33.64T564-400q0 25.71 12 48.86Q588-328 607-311l-20 20Z"/>
    </Icon>
  );
});

IconMaterialBroadcastOnHomeW100Filled.displayName = 'OnesyIconMaterialBroadcastOnHomeW100Filled';

export default IconMaterialBroadcastOnHomeW100Filled;
