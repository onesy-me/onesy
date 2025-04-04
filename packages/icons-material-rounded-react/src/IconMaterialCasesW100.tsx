import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCasesW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CasesW100'

      short_name='Cases'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M152-174q-26 0-43-17t-17-43v-330q0-6 4-10t10-4q6 0 10 4t4 10v330q0 12 10 22t22 10h556q6 0 10 4t4 10q0 6-4 10t-10 4H152Zm108-108q-26 0-43-17t-17-43v-326q0-13 8.5-21.5T230-698h186v-58q0-26 17-43t43-17h116q26 0 43 17t17 43v58h186q13 0 21.5 8.5T868-668v326q0 26-17 43t-43 17H260Zm0-28h548q12 0 22-10t10-22v-328H228v328q0 12 10 22t22 10Zm184-388h180v-58q0-12-10-22t-22-10H476q-12 0-22 10t-10 22v58ZM228-310v-360 360Z"/>
    </Icon>
  );
});

IconMaterialCasesW100.displayName = 'OnesyIconMaterialCasesW100';

export default IconMaterialCasesW100;
