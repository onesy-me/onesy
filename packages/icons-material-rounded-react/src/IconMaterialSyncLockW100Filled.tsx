import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSyncLockW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SyncLockW100Filled'

      short_name='SyncLock'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M214-476q0 62.94 27 115.97T342-242v-114q0-5.95 4.04-9.98 4.03-4.02 10-4.02 5.96 0 9.96 4.02 4 4.03 4 9.98v132q0 12.75-8.62 21.37Q352.75-194 340-194H208q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h114q-78-68-107-128t-29-126.36q0-86.64 45-158.14Q276-706 349-743q6-3 12-1.5t8 7.5q2 6-.65 11.53-2.65 5.52-8.35 8.47-66 33-106 98t-40 143Zm546.07-2q-6.07 0-10.07-4t-4-10q-2-61-30.5-112.5T618-717v113q0 5.95-4.04 9.97-4.03 4.03-10 4.03-5.96 0-9.96-4.03-4-4.02-4-9.97v-132q0-12.75 8.63-21.38Q607.25-766 620-766h132q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H638q76 64 105 126.5T774-492q0 6-3.93 10t-10 4ZM648-94q-14 0-25-11t-11-25v-104q0-14 11-25t25-11h5v-40q0-29 19.5-48.5T721-378q29 0 48.5 19.5T789-310v40h5q14.45 0 24.22 11 9.78 11 9.78 25v104q0 14-11 25t-25 11H648Zm33-176h80v-40q0-17-11.5-28.5T721-350q-17 0-28.5 11.5T681-310v40Z"/>
    </Icon>
  );
});

IconMaterialSyncLockW100Filled.displayName = 'OnesyIconMaterialSyncLockW100Filled';

export default IconMaterialSyncLockW100Filled;
