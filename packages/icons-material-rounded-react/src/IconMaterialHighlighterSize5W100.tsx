import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHighlighterSize5W100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HighlighterSize5W100'

      short_name='HighlighterSize5'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M428-88 88-428q-4-4-4-10t4-10l424-424q4-4 10-3.5t10 4.5l340 339q4 4 4 10t-4 10L448-88q-4 4-10 4t-10-4Z"/>
    </Icon>
  );
});

IconMaterialHighlighterSize5W100.displayName = 'OnesyIconMaterialHighlighterSize5W100';

export default IconMaterialHighlighterSize5W100;
