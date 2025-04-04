import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialArticle = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Article'

      short_name='Article'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-280h280v-80H280v80Zm0-160h400v-80H280v80Zm0-160h400v-80H280v80ZM120-120v-720h720v720H120Zm80-80h560v-560H200v560Zm0 0v-560 560Z"/>
    </Icon>
  );
});

IconMaterialArticle.displayName = 'OnesyIconMaterialArticle';

export default IconMaterialArticle;
