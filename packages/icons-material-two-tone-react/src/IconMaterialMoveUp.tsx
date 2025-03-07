import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMoveUp = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MoveUp'

      short_name='MoveUp'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><g><rect height="3" opacity=".3" width="5" x="15" y="15"/><path d="M3,13c0-2.45,1.76-4.47,4.08-4.91L5.59,9.59L7,11l4-4.01L7,3L5.59,4.41l1.58,1.58l0,0.06C3.7,6.46,1,9.42,1,13 c0,3.87,3.13,7,7,7h3v-2H8C5.24,18,3,15.76,3,13z"/><path d="M13,13v7h9v-7H13z M20,18h-5v-3h5V18z"/><rect height="7" width="9" x="13" y="4"/></g></g>
    </Icon>
  );
});

IconMaterialMoveUp.displayName = 'OnesyIconMaterialMoveUp';

export default IconMaterialMoveUp;
