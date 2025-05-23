import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBroadcastOnPersonalW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BroadcastOnPersonalW100'

      short_name='BroadcastOnPersonal'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M400-510ZM132-212v-402l268-201 213 159q-9 2-17.5 4.5T579-646L400-780 160-600v360h242q3 8 6.5 14.5T416-212H132Zm385 32q-39-35-60-82.17-21-47.18-21-97.83 0-102.29 71.26-173.15Q578.53-604 679.79-604 782-604 853-533.15q71 70.86 71 173.15 0 51-20.5 98.5T843-181l-18-19q35-30 53-72.16T896-360q0-90.72-62.71-153.36Q770.57-576 679.75-576 590-576 527-513.36T464-360q0 46 18.5 88t53.5 73l-19 19Zm70-71q-23-22-37-50.03-14-28.04-14-58.97 0-60.3 42.24-102.15Q620.48-504 679.79-504 740-504 782-462.15 824-420.3 824-360q0 32-13.5 60.5T773-250l-20-20q20-17 31.5-40.46Q796-333.93 796-360q0-48.72-33.64-82.36T680-476q-48 0-82 33.64T564-360q0 25.71 12 48.86Q588-288 607-271l-20 20Zm79 115v-193q-9-4-14.5-12.5T646-360q0-14.28 10.14-24.14Q666.28-394 679.8-394q14.2 0 24.2 9.86T714-360q0 10-5 18t-15 13v193h-28Z"/>
    </Icon>
  );
});

IconMaterialBroadcastOnPersonalW100.displayName = 'OnesyIconMaterialBroadcastOnPersonalW100';

export default IconMaterialBroadcastOnPersonalW100;
