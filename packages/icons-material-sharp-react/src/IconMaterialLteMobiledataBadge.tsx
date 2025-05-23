import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLteMobiledataBadge = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LteMobiledataBadge'

      short_name='LteMobiledataBadge'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-320h200v-80H240v-240h-80v320Zm240 0h80v-240h80v-80H320v80h80v240Zm200 0h200v-80H680v-40h80v-80h-80v-40h120v-80H600v320ZM40-120v-720h880v720H40Zm80-80h720v-560H120v560Zm0 0v-560 560Z"/>
    </Icon>
  );
});

IconMaterialLteMobiledataBadge.displayName = 'OnesyIconMaterialLteMobiledataBadge';

export default IconMaterialLteMobiledataBadge;
