import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialOpenInNewOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OpenInNewOffW100'

      short_name='OpenInNewOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m784-136-38-38q-5 1-9 1.5t-9 .5H232q-26 0-43-17t-17-43v-496q0-5 .5-9t1.5-9l-38-38q-4-4-4.5-9.5T136-804q5-5 10-5t10 5l648 648q4 4 4.5 9.5T804-136q-5 5-10 5t-10-5Zm-552-64h488L470-450l-70 70q-4 4-9.5 4.5T380-380q-5-5-5-10t5-10l70-70-250-250v488q0 12 10 22t22 10Zm194-560H307q-7 0-10.5-4.5T293-774q0-5 3.5-9.5T307-788h119q6 0 10 4t4 10q0 6-4 10t-10 4Zm334 20L556-536q-4 4-9.5 4.5T536-536q-5-5-5-10t5-10l204-204H574q-6 0-10-4t-4-10q0-6 4-10t10-4h184q13 0 21.5 8.5T788-758v184q0 6-4 10t-10 4q-6 0-10-4t-4-10v-166Zm28 314v118q0 7-4.5 10.5T774-294q-5 0-9.5-3.5T760-308v-118q0-6 4-10t10-4q6 0 10 4t4 10Z"/>
    </Icon>
  );
});

IconMaterialOpenInNewOffW100.displayName = 'OnesyIconMaterialOpenInNewOffW100';

export default IconMaterialOpenInNewOffW100;
