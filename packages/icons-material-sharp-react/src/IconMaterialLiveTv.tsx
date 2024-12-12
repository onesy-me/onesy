import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLiveTv = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LiveTv'

      short_name='LiveTv'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m380-340 280-180-280-180v360Zm-60 220v-80H80v-640h800v640H640v80H320ZM160-280h640v-480H160v480Zm0 0v-480 480Z"/>
    </Icon>
  );
});

IconMaterialLiveTv.displayName = 'OnesyIconMaterialLiveTv';

export default IconMaterialLiveTv;
