import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNoFlashW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoFlashW100'

      short_name='NoFlash'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M842-78 704-216v14q0 19-13.5 32.5T657.72-156H202q-19.17 0-32.58-13.42Q156-182.83 156-202v-320q0-19.17 13.42-32.58Q182.83-568 202-568h76l35-39-213-213q-4-4-4.5-9.5T100-840q5-5 10-5t10 5L862-98q4 4 4.5 9.5T862-78q-5 5-10 5t-10-5ZM208-184h444q10 0 17-7t7-17v-36L543-377q1 4 1 7.5v7.5q0 48-33 81t-81 33q-48 0-81-33t-33-81q0-48 33-81t81-33h7.5q3.5 0 7.5 1l-65-65H208q-10 0-17 7t-7 17v308q0 10 7 17t17 7Zm222.5-92q35.5 0 60.5-25.5t25-61q0-35.5-25.08-60.5-25.09-25-60.92-25-35 0-60.5 25.08Q344-397.83 344-362q0 35 25.5 60.5t61 25.5ZM704-522v120q0 5.95-4.04 9.98-4.03 4.02-10 4.02-5.96 0-9.96-4.1-4-4.1-4-9.9v-114q0-10-7-17t-17-7H532l-60-60q-5-5-4.46-10.54.53-5.53 4.46-9.46 3.93-3.93 9.46-4.46Q487-625 492-620l52 52h114q19.17 0 32.58 13.42Q704-541.17 704-522Zm32-184h-5q-6 0-10.5-4.5T716-721v-88q0-6 4.5-10.5T731-824h49q7.79 0 12.4 6.5 4.6 6.5.6 14.5l-29 65h22.68q8.32 0 12.82 7t.5 15l-50 98q-3 5-8.5 4t-5.5-6.64V-706Zm-60 310Zm-148 4Z"/>
    </Icon>
  );
});

IconMaterialNoFlashW100.displayName = 'OnesyIconMaterialNoFlashW100';

export default IconMaterialNoFlashW100;
