import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSnippetFolderW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SnippetFolderW100Filled'

      short_name='SnippetFolder'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-212v-536h247l80 80h369v456H132Zm432-112v-232h78l74 74v158H564Zm-28 28h208v-197l-91-91H536v288Z"/>
    </Icon>
  );
});

IconMaterialSnippetFolderW100Filled.displayName = 'OnesyIconMaterialSnippetFolderW100Filled';

export default IconMaterialSnippetFolderW100Filled;
