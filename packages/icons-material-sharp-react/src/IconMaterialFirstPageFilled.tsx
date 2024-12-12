import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFirstPageFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FirstPageFilled'

      short_name='FirstPage'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-240v-480h80v480h-80Zm440 0L440-480l240-240 56 56-184 184 184 184-56 56Z"/>
    </Icon>
  );
});

IconMaterialFirstPageFilled.displayName = 'OnesyIconMaterialFirstPageFilled';

export default IconMaterialFirstPageFilled;
