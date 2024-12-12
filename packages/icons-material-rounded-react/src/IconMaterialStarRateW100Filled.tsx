import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialStarRateW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StarRateW100Filled'

      short_name='StarRate'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m480-372-113 86q-5 3-9.5 2.5T349-286q-4-2-6-6.5t0-9.5l43-142-106-77q-5-3-6.5-7.5t.5-9.5q2-5 5.5-7.5t8.5-2.5h134l44-144q2-5 5.5-8t8.5-3q5 0 8.5 3t5.5 8l44 144h134q5 0 8.5 2.5t5.5 7.5q2 5 .5 9.5T680-521l-106 77 43 142q2 5 0 9.5t-6 6.5q-4 2-8.5 2.5T593-286l-113-86Z"/>
    </Icon>
  );
});

IconMaterialStarRateW100Filled.displayName = 'OnesyIconMaterialStarRateW100Filled';

export default IconMaterialStarRateW100Filled;
