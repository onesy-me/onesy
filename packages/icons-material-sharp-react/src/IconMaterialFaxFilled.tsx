import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFaxFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FaxFilled'

      short_name='Fax'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M320-160v-640h400v200h160v440H320ZM80-120h200v-520H80v520Zm320-480h240v-120H400v120Zm0 320h160v-200H400v200Zm200-120h80v-80h-80v80Zm120 0h80v-80h-80v80ZM600-280h80v-80h-80v80Zm120 0h80v-80h-80v80Z"/>
    </Icon>
  );
});

IconMaterialFaxFilled.displayName = 'OnesyIconMaterialFaxFilled';

export default IconMaterialFaxFilled;
