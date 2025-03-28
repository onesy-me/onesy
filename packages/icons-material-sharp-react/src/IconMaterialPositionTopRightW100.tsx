import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPositionTopRightW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PositionTopRightW100'

      short_name='PositionTopRight'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M380-602h308v-68H380v68ZM172-172v-616h616v616H172Zm28-28h560v-560H200v560Zm0-560v560-560Z"/>
    </Icon>
  );
});

IconMaterialPositionTopRightW100.displayName = 'OnesyIconMaterialPositionTopRightW100';

export default IconMaterialPositionTopRightW100;
