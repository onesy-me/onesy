import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialOutputCircleFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OutputCircleFilled'

      short_name='OutputCircle'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m520-233 76-75q11-11 28-11t28 11q11 11 11 28t-11 28L508-108q-11 11-28 11t-28-11L308-252q-11-11-11-28t11-28q11-11 28-11t28 11l76 75v-367q0-17 11.5-28.5T480-640q17 0 28.5 11.5T520-600v367Zm-40-567q-134 0-227 93t-93 227q0 33 6.5 65t19.5 62q7 17 4.5 34T175-289q-12 12-29.5 5.5T119-309q-19-41-29-83.5T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 45-9.5 88.5T841-307q-9 18-26.5 24t-29.5-6q-12-12-15.5-29t3.5-33q14-31 20.5-63.5T800-480q0-134-93-227t-227-93Z"/>
    </Icon>
  );
});

IconMaterialOutputCircleFilled.displayName = 'OnesyIconMaterialOutputCircleFilled';

export default IconMaterialOutputCircleFilled;
