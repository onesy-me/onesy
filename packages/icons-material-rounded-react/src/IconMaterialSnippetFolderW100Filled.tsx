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
      <path d="M192-212q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h162q12 0 23.5 5t19.5 13l62 62h309q26 0 43 17t17 43v336q0 26-17 43t-43 17H192Zm372-112v-232h78l74 74v158H564Zm2 28h148q13 0 21.5-8.5T744-326v-155q0-6-2-11t-7-10l-73-73q-5-5-10-7t-11-2h-75q-13 0-21.5 8.5T536-554v228q0 13 8.5 21.5T566-296Z"/>
    </Icon>
  );
});

IconMaterialSnippetFolderW100Filled.displayName = 'OnesyIconMaterialSnippetFolderW100Filled';

export default IconMaterialSnippetFolderW100Filled;
