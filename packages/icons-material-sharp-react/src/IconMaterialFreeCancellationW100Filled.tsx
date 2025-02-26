import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFreeCancellationW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FreeCancellationW100Filled'

      short_name='FreeCancellation'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M642-110 537-215l19-19 85 85 170-170 19 20-188 189ZM296-317l-19-19 64-64-64-64 19-19 64 64 64-64 19 19-64 64 64 64-19 19-64-64-64 64ZM172-132v-616h140v-92h32v92h276v-92h28v92h140v281l-28 29v-90H200v368h221l30 28H172Z"/>
    </Icon>
  );
});

IconMaterialFreeCancellationW100Filled.displayName = 'OnesyIconMaterialFreeCancellationW100Filled';

export default IconMaterialFreeCancellationW100Filled;
