import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFormatInkHighlighterFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatInkHighlighterFilled'

      short_name='FormatInkHighlighter'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160 0q-33 0-56.5-23.5T80-80q0-33 23.5-56.5T160-160h640q33 0 56.5 23.5T880-80q0 33-23.5 56.5T800 0H160Zm264-640 216 217-160 160q-24 24-56.5 24T367-263l-5 4q-11 9-24 14t-27 5H189q-14 0-19.5-12t4.5-22l92-91q-24-24-25-57.5t23-57.5l160-160Zm56-57 160-159q24-24 56.5-24t56.5 24l104 103q24 24 24 56.5T857-640L697-480 480-697Z"/>
    </Icon>
  );
});

IconMaterialFormatInkHighlighterFilled.displayName = 'OnesyIconMaterialFormatInkHighlighterFilled';

export default IconMaterialFormatInkHighlighterFilled;
