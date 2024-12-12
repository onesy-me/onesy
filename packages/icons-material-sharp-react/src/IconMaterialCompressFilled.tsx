import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCompressFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CompressFilled'

      short_name='Compress'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-400v-80h640v80H160Zm0-120v-80h640v80H160ZM440-80v-128l-64 64-56-56 160-160 160 160-56 56-64-62v126h-80Zm40-560L320-800l56-56 64 64v-128h80v128l64-64 56 56-160 160Z"/>
    </Icon>
  );
});

IconMaterialCompressFilled.displayName = 'OnesyIconMaterialCompressFilled';

export default IconMaterialCompressFilled;
