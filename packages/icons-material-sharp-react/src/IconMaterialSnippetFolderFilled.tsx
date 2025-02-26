import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSnippetFolderFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SnippetFolderFilled'

      short_name='SnippetFolder'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-160v-640h320l80 80h400v560H80Zm500-180v-200h55l65 65v135H580Zm-60 60h240v-220L660-600H520v320Z"/>
    </Icon>
  );
});

IconMaterialSnippetFolderFilled.displayName = 'OnesyIconMaterialSnippetFolderFilled';

export default IconMaterialSnippetFolderFilled;
