import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSyncDisabledW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SyncDisabledW100Filled'

      short_name='SyncDisabled'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M214-476q0 52 20.5 99.5T292-292l50 50v-114q0-6 4-10t10-4q6 0 10 4t4 10v132q0 13-8.5 21.5T340-194H208q-6 0-10-4t-4-10q0-6 4-10t10-4h114l-50-50q-41-41-63.5-93.5T186-476q0-45 13.5-88t39.5-81L122-762q-4-4-4.5-9.5T122-782q5-5 10-5t10 5l640 640q4 4 4.5 9.5T782-122q-5 5-10 5t-10-5L645-239q-11 8-22 14.5T600-212q-5 2-11 0t-8-7q-2-5 .5-11t7.5-8q12-5 24-12t23-14l-2 14-375-375q-23 33-34 71t-11 78Zm508 160-20-20q22-33 33-70.5t11-77.5q0-52-20.5-99.5T668-668l-50-50v114q0 6-4 10t-10 4q-6 0-10-4t-4-10v-132q0-13 8.5-21.5T620-766h132q6 0 10 4t4 10q0 6-4 10t-10 4H638l50 50q41 41 63.5 93.5T774-484q0 45-13.5 87.5T722-316ZM335-703l-19-19q11-8 22-14.5t23-11.5q5-2 10.5 0t7.5 7q2 5-1 11t-8 8q-9 4-18 9t-17 10Z"/>
    </Icon>
  );
});

IconMaterialSyncDisabledW100Filled.displayName = 'OnesyIconMaterialSyncDisabledW100Filled';

export default IconMaterialSyncDisabledW100Filled;
