import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHighlighterSize4W100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HighlighterSize4W100Filled'

      short_name='HighlighterSize4'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M371-145 145-371q-5-5-5-10.5t5-10.5l423-423q4-4 10-4t10 4l227 226q5 5 5 10.5t-5 10.5L392-145q-5 5-10.5 5t-10.5-5Z"/>
    </Icon>
  );
});

IconMaterialHighlighterSize4W100Filled.displayName = 'OnesyIconMaterialHighlighterSize4W100Filled';

export default IconMaterialHighlighterSize4W100Filled;
