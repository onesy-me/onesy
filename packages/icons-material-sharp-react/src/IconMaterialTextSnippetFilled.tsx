import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTextSnippetFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TextSnippetFilled'

      short_name='TextSnippet'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-120v-720h480l240 240v480H120Zm160-160h400v-80H280v80Zm0-160h400v-80H280v80Zm0-160h280v-80H280v80Z"/>
    </Icon>
  );
});

IconMaterialTextSnippetFilled.displayName = 'OnesyIconMaterialTextSnippetFilled';

export default IconMaterialTextSnippetFilled;
