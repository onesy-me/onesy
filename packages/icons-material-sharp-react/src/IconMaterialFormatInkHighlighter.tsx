import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFormatInkHighlighter = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatInkHighlighter'

      short_name='FormatInkHighlighter'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80 0v-160h800V0H80Zm504-480-52-52-52-52-160 160 103 104 161-160Zm-47-160 52 51 51 52 160-159-104-104-159 160ZM140-240l126-126-30-29v-57l217-217 216 216-217 217h-56l-30-30-26 26H140Zm313-429 244-244 217 217-245 243-216-216Z"/>
    </Icon>
  );
});

IconMaterialFormatInkHighlighter.displayName = 'OnesyIconMaterialFormatInkHighlighter';

export default IconMaterialFormatInkHighlighter;
