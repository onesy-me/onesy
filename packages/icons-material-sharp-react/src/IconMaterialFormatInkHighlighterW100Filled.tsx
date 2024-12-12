import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFormatInkHighlighterW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatInkHighlighterW100Filled'

      short_name='FormatInkHighlighter'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80 0v-56h800V0H80Zm109-249 94-94-29-29v-42l175-175 144 144-175 175h-42l-31-31-52 52h-84Zm260-360 231-231 144 144-231 231-144-144Z"/>
    </Icon>
  );
});

IconMaterialFormatInkHighlighterW100Filled.displayName = 'OnesyIconMaterialFormatInkHighlighterW100Filled';

export default IconMaterialFormatInkHighlighterW100Filled;
