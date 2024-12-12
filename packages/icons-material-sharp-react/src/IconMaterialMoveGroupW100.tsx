import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMoveGroupW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MoveGroupW100'

      short_name='MoveGroup'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M266-292v-114h28v86h480v-400H294v86h-28v-194h536v536H266ZM158-184v-504h28v476h476v28H158Zm332-193-19-19 108-110H266v-28h313L471-644l19-19 143 143-143 143Z"/>
    </Icon>
  );
});

IconMaterialMoveGroupW100.displayName = 'OnesyIconMaterialMoveGroupW100';

export default IconMaterialMoveGroupW100;
