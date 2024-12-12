import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialArrowInsertFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowInsertFilled'

      short_name='ArrowInsert'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M704-240 320-624v344h-80v-480h480v80H376l384 384-56 56Z"/>
    </Icon>
  );
});

IconMaterialArrowInsertFilled.displayName = 'OnesyIconMaterialArrowInsertFilled';

export default IconMaterialArrowInsertFilled;
