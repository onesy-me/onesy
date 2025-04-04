import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHearingW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HearingW100'

      short_name='Hearing'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M681-106q-51 0-85.5-30T541-220q-15-42-35.5-67.5T431-356q-60-48-92-107.5T307-600q0-109 72.5-181.5T561-854q103 0 173.5 64T813-626h-28q-8-88-71.5-144T561-826q-95 0-160.5 65.5T335-600q0 72 33.5 129.5T453-374q46 35 70.5 65.5T567-230q18 45 44 70.5t70 25.5q36 0 64.5-22.5T783-214h30q-9 47-45.5 77.5T681-106ZM251-328q-48-54-76-124t-28-148q0-78 28-149t76-125l20 18q-45 53-70.5 117.5T175-600q0 72 25.5 136.5T271-346l-20 18Zm310-192q-34 0-57-23t-23-57q0-34 23-57t57-23q34 0 57 23t23 57q0 34-23 57t-57 23Z"/>
    </Icon>
  );
});

IconMaterialHearingW100.displayName = 'OnesyIconMaterialHearingW100';

export default IconMaterialHearingW100;
