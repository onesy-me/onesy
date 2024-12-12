import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMarkdownPasteW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MarkdownPasteW100'

      short_name='MarkdownPaste'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M524-172v-282h304v282h-28v-254H690v174h-28v-174H552v254h-28Zm-352 0v-616h251q4-20 19.5-34t37.5-14q22 0 37.5 14t19.5 34h251v234h-28v-206H628v80H332v-80H200v560h224v28H172Zm308.18-576q12.82 0 21.32-8.68 8.5-8.67 8.5-21.5 0-12.82-8.68-21.32-8.67-8.5-21.5-8.5-12.82 0-21.32 8.68-8.5 8.67-8.5 21.5 0 12.82 8.68 21.32 8.67 8.5 21.5 8.5Z"/>
    </Icon>
  );
});

IconMaterialMarkdownPasteW100.displayName = 'OnesyIconMaterialMarkdownPasteW100';

export default IconMaterialMarkdownPasteW100;
