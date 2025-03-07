import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEdgesensorLowW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EdgesensorLowW100'

      short_name='EdgesensorLow'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M188-426q-6 0-10-4t-4-10v-200q0-6 4-10t10-4q6 0 10 4t4 10v200q0 6-4 10t-10 4Zm584 120q-6 0-10-4t-4-10v-200q0-6 4-10t10-4q6 0 10 4t4 10v200q0 6-4 10t-10 4ZM342-132q-26 0-43-17t-17-43v-576q0-26 17-43t43-17h276q26 0 43 17t17 43v576q0 26-17 43t-43 17H342Zm308-94H310v34q0 12 10 22t22 10h276q12 0 22-10t10-22v-34ZM310-734h340v-34q0-12-10-22t-22-10H342q-12 0-22 10t-10 22v34Zm0 0v-66 66Zm0 508v66-66Zm0-28h340v-452H310v452Z"/>
    </Icon>
  );
});

IconMaterialEdgesensorLowW100.displayName = 'OnesyIconMaterialEdgesensorLowW100';

export default IconMaterialEdgesensorLowW100;
