import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHexagonW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HexagonW100'

      short_name='Hexagon'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M322-146q-16 0-30-8t-22-22L111-450q-8-14-8-30t8-30l159-274q8-14 22-22t30-8h316q16 0 30 8t22 22l159 274q8 14 8 30t-8 30L690-176q-8 14-22 22t-30 8H322Zm-1-28h317q8 0 15.5-4t12.5-12l158-274q5-8 5-16t-5-16L666-770q-5-8-12.5-12t-15.5-4H321q-8 0-15 4t-12 12L135-496q-5 8-5 16t5 16l159 274q5 8 12 12t15 4Zm159-306Z"/>
    </Icon>
  );
});

IconMaterialHexagonW100.displayName = 'OnesyIconMaterialHexagonW100';

export default IconMaterialHexagonW100;
