import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBreakingNews = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BreakingNews'

      short_name='BreakingNews'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-280h80v-80h-80v80Zm0-160h80v-240h-80v240Zm200 160h280v-80H440v80Zm0-160h280v-80H440v80Zm0-160h280v-80H440v80ZM80-120v-720h800v720H80Zm80-80h640v-560H160v560Zm0 0v-560 560Z"/>
    </Icon>
  );
});

IconMaterialBreakingNews.displayName = 'OnesyIconMaterialBreakingNews';

export default IconMaterialBreakingNews;
