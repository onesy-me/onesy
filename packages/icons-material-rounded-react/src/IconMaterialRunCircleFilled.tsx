import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRunCircleFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RunCircleFilled'

      short_name='RunCircle'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m520-383-45-49-13 66q-3 17-16.5 26t-30.5 6l-92-19q-8-2-12.5-8.5T308-376q2-8 9-13t15-3l91 19 39-196-62 23v46q0 8-6 14t-14 6q-8 0-14-6t-6-14v-46q0-13 7-23t19-15l105-38q15-5 29.5 1t21.5 20q18 37 39.5 54t38.5 23q8 3 14 9.5t6 14.5q0 8-6 13.5t-14 3.5q-22-5-48-21.5T524-550l-17 94 42 45q5 5 8 12.5t3 15.5v123q0 8-6 14t-14 6q-8 0-14-6t-6-14v-123Zm20-257q-17 0-28.5-11.5T500-680q0-17 11.5-28.5T540-720q17 0 28.5 11.5T580-680q0 17-11.5 28.5T540-640ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Z"/>
    </Icon>
  );
});

IconMaterialRunCircleFilled.displayName = 'OnesyIconMaterialRunCircleFilled';

export default IconMaterialRunCircleFilled;
