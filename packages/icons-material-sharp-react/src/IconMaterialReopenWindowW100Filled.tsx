import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialReopenWindowW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ReopenWindowW100Filled'

      short_name='ReopenWindow'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-212v-536h696v236h-28v-128H160v400h276v28H132ZM720-84q-61 0-109-36.5T545-212h30q17 45 55.61 72.5T720-112q64.63 0 110.31-45.69Q876-203.37 876-268t-45.69-110.31Q784.63-424 720-424q-39 0-75 20t-62 52h81v28H536v-128h28v79q29-35 70-57t86-22q76.36 0 130.18 53.82Q904-344.36 904-268q0 76.36-53.82 130.18Q796.36-84 720-84Z"/>
    </Icon>
  );
});

IconMaterialReopenWindowW100Filled.displayName = 'OnesyIconMaterialReopenWindowW100Filled';

export default IconMaterialReopenWindowW100Filled;
