import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialExploreOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ExploreOff'

      short_name='ExploreOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M688-688q3 3 4 7.5t-1 9.5l-83 168q-5 9-14.5 11t-17.5-6l-78-78q-8-8-6-17.5t11-14.5l168-83q5-2 9.5-1t7.5 4ZM480-160q43 0 84-11t78-33L482-364l-193 95q-10 5-17.5-2.5T269-289l93-195-158-158q-22 37-33 78t-11 84q0 134 93 227t227 93Zm0 80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-59 17-115t49-105l-63-63q-12-12-12-28.5T83-820q12-12 28.5-12t28.5 12l680 680q11 11 11 28t-11 28q-12 12-28.5 12T763-84l-63-62q-49 32-105 49T480-80Zm79-479ZM401-401Zm-87-443q39-18 81-27t85-9q80 0 153 30t130 87q57 57 87 130t30 153q0 43-9 85t-27 81q-7 15-23 19.5t-30-3.5q-14-8-19-24t2-32q13-30 19.5-62t6.5-64q0-134-93-227t-227-93q-32 0-64 6.5T354-774q-16 7-32 2t-24-19q-8-14-3.5-30t19.5-23Z"/>
    </Icon>
  );
});

IconMaterialExploreOff.displayName = 'OnesyIconMaterialExploreOff';

export default IconMaterialExploreOff;
