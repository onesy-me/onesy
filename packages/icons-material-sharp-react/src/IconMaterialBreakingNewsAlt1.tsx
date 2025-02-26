import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBreakingNewsAlt1 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BreakingNewsAlt1'

      short_name='BreakingNewsAlt1'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-280h200v-80H240v80Zm400 0h80v-80h-80v80ZM240-440h200v-80H240v80Zm400 0h80v-240h-80v240ZM240-600h200v-80H240v80ZM80-120v-720h800v720H80Zm80-80h640v-560H160v560Zm0 0v-560 560Z"/>
    </Icon>
  );
});

IconMaterialBreakingNewsAlt1.displayName = 'OnesyIconMaterialBreakingNewsAlt1';

export default IconMaterialBreakingNewsAlt1;
