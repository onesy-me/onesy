import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialInkHighlighterFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='InkHighlighterFilled'

      short_name='InkHighlighter'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m384-560 216 216-200 200q-24 24-56 24t-56-24l-2-2-3 3q-11 11-25.5 17t-30.5 6H108q-14 0-19-12t5-22l92-92-2-2q-24-24-24-56t24-56l200-200Zm57-57 199-199q24-24 56-24t56 24l104 104q24 24 24 56t-24 56L657-401 441-617Z"/>
    </Icon>
  );
});

IconMaterialInkHighlighterFilled.displayName = 'OnesyIconMaterialInkHighlighterFilled';

export default IconMaterialInkHighlighterFilled;
