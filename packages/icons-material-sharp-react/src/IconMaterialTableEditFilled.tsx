import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTableEditFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TableEditFilled'

      short_name='TableEdit'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-400v-200h320v200H120Zm0-280v-160h720v160H120Zm0 560v-200h320v200H120Zm400-280v-200h286L605-400h-85Zm0 320v-123l263-262 123 122L643-80H520Zm263-224 37-39-37-37-38 38 38 38Z"/>
    </Icon>
  );
});

IconMaterialTableEditFilled.displayName = 'OnesyIconMaterialTableEditFilled';

export default IconMaterialTableEditFilled;
