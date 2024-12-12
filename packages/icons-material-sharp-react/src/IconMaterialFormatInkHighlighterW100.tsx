import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFormatInkHighlighterW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatInkHighlighterW100'

      short_name='FormatInkHighlighter'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80 0v-56h800V0H80Zm473-465-52-52-52-52-176 176 104 104 176-176Zm-84-124 52 52 52 52 211-211-104-104-211 211ZM189-249l94-94-29-29v-42l185-185 144 144-185 185h-42l-31-31-52 52h-84Zm250-350 241-241 144 144-241 241-144-144Z"/>
    </Icon>
  );
});

IconMaterialFormatInkHighlighterW100.displayName = 'OnesyIconMaterialFormatInkHighlighterW100';

export default IconMaterialFormatInkHighlighterW100;
