import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFoundationW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FoundationW100Filled'

      short_name='Foundation'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M264-320v134q0 5.95-4.04 9.98-4.03 4.02-10 4.02-5.96 0-9.96-4.02-4-4.03-4-9.98v-134h-63q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h63v-225l-116 86q-5 3-10 2.5t-9-5.5q-4-5-3.5-10t5.5-9l341-253q8-6 17.21-8.5T480-773q9.58 0 18.79 2.5Q508-768 516-762l342 253q5 4 5.5 9t-3.5 10q-4 5-9 5.5t-10-2.5l-116-86v225h62q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4h-62v134q0 5.95-4.04 9.98-4.03 4.02-10 4.02-5.96 0-9.96-4.02-4-4.03-4-9.98v-134H494v134q0 5.95-4.04 9.98-4.03 4.02-10 4.02-5.96 0-9.96-4.02-4-4.03-4-9.98v-134H264Zm0-28h202v-395L264-593v245Zm230 0h203v-245L494-743v395Z"/>
    </Icon>
  );
});

IconMaterialFoundationW100Filled.displayName = 'OnesyIconMaterialFoundationW100Filled';

export default IconMaterialFoundationW100Filled;
