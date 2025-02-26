import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAlignHorizontalRightW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlignHorizontalRightW100Filled'

      short_name='AlignHorizontalRight'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M774-132q-6 0-10-4t-4-10v-668q0-6 4-10t10-4q6 0 10 4t4 10v668q0 6-4 10t-10 4ZM447-316q-14 0-24.5-10.5T412-351q0-14 10.5-24.5T447-386h168q14 0 24.5 10.5T650-351q0 14-10.5 24.5T615-316H447ZM207-574q-14 0-24.5-10.5T172-609q0-14 10.5-24.5T207-644h408q14 0 24.5 10.5T650-609q0 14-10.5 24.5T615-574H207Z"/>
    </Icon>
  );
});

IconMaterialAlignHorizontalRightW100Filled.displayName = 'OnesyIconMaterialAlignHorizontalRightW100Filled';

export default IconMaterialAlignHorizontalRightW100Filled;
