import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNextPlan = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NextPlan'

      short_name='NextPlan'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M584-480h-24q-17 0-28.5 11.5T520-440q0 17 11.5 28.5T560-400h120q17 0 28.5-11.5T720-440v-120q0-17-11.5-28.5T680-600q-17 0-28.5 11.5T640-560v22q-32-38-76.5-60T466-620q-83 0-143.5 49.5T245-446q-4 18 7 32t28 14q17 0 29.5-12.5T327-442q14-43 52-70.5t87-27.5q36 0 67 16.5t51 43.5ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/>
    </Icon>
  );
});

IconMaterialNextPlan.displayName = 'OnesyIconMaterialNextPlan';

export default IconMaterialNextPlan;
