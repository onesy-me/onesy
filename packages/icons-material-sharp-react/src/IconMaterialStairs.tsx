import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialStairs = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Stairs'

      short_name='Stairs'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-240h177v-133h103v-133h103v-134h97v-80H543v133H440v133H337v134h-97v80ZM120-120v-720h720v720H120Zm80-80h560v-560H200v560Zm0 0v-560 560Z"/>
    </Icon>
  );
});

IconMaterialStairs.displayName = 'OnesyIconMaterialStairs';

export default IconMaterialStairs;
