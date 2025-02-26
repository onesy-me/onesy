import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPositionBottomLeftW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PositionBottomLeftW100'

      short_name='PositionBottomLeft'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M272-290h308v-68H272v68ZM172-172v-616h616v616H172Zm28-28h560v-560H200v560Zm0-560v560-560Z"/>
    </Icon>
  );
});

IconMaterialPositionBottomLeftW100.displayName = 'OnesyIconMaterialPositionBottomLeftW100';

export default IconMaterialPositionBottomLeftW100;
