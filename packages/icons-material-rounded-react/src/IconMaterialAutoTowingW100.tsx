import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAutoTowingW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AutoTowingW100'

      short_name='AutoTowing'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M72-338q0-12.75 8.63-21.38Q89.25-368 102-368h396L114-670v130q0 5.95-4.04 9.97-4.03 4.03-10 4.03-5.96 0-9.96-4.03-4-4.02-4-9.97v-128q0-17 15-25.5t30-.5l461 256v-260q0-12.75 8.63-21.38Q609.25-728 622-728h66q13.57 0 25.64 5.69Q725.7-716.62 734-706l140 167q6.63 8.32 10.32 18.16Q888-511 888-500.49v158.45q0 12.77-8.62 21.4Q870.75-312 858-312h-56q17 42-9 81t-73 39q-47 0-73-39t-9-81H342q17 42-9 81t-73 39q-47 0-73-39t-9-81H98q-11.05 0-18.53-7.48Q72-326.95 72-338Zm188 118q26 0 43-18t17-42q0-24-17-42t-43-18q-26 0-43 18t-17 42q0 24 17 42t43 18Zm460 0q26 0 43-18t17-42q0-24-17-42t-43-18q-26 0-43 18t-17 42q0 24 17 42t43 18ZM620-522h232L702-700h-82v178Z"/>
    </Icon>
  );
});

IconMaterialAutoTowingW100.displayName = 'OnesyIconMaterialAutoTowingW100';

export default IconMaterialAutoTowingW100;
