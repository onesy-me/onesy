import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLocalPostOffice = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocalPostOffice'

      short_name='LocalPostOffice'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M640-200v120H80v-400h160v-160q0-100 70-170t170-70h160q100 0 170 70t70 170v560h-80v-120H640Zm0-80h160v-360q0-66-47-113t-113-47H480q-66 0-113 47t-47 113v160h320v200Zm-280-6 200-114H160l200 114Zm0 70L160-330v170h400v-170L360-216ZM160-400v240-240Zm240-160v-80h320v80H400Z"/>
    </Icon>
  );
});

IconMaterialLocalPostOffice.displayName = 'OnesyIconMaterialLocalPostOffice';

export default IconMaterialLocalPostOffice;
