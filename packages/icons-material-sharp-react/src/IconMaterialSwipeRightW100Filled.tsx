import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSwipeRightW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwipeRightW100Filled'

      short_name='SwipeRight'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-660q46-84 139.5-133.5T477-843q83 0 162 29.5T800-722v-106h28v168H660v-28h136q-81-65-159-96t-160-31q-99 0-183 41.5T162-660h-30Zm303 528L212-354l29-27 145 35v-348h28v308h83v-174h28v174h84v-134h28v134h83v-54h28v308H435Z"/>
    </Icon>
  );
});

IconMaterialSwipeRightW100Filled.displayName = 'OnesyIconMaterialSwipeRightW100Filled';

export default IconMaterialSwipeRightW100Filled;
