import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLastPageFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LastPageFilled'

      short_name='LastPage'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m280-240-56-56 184-184-184-184 56-56 240 240-240 240Zm360 0v-480h80v480h-80Z"/>
    </Icon>
  );
});

IconMaterialLastPageFilled.displayName = 'OnesyIconMaterialLastPageFilled';

export default IconMaterialLastPageFilled;
