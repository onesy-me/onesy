import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHighlighterSize1 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HighlighterSize1'

      short_name='HighlighterSize1'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m268-212-56-56q-12-12-12-28.5t12-28.5l423-423q12-12 28.5-12t28.5 12l56 56q12 12 12 28.5T748-635L324-212q-11 11-28 11t-28-11Z"/>
    </Icon>
  );
});

IconMaterialHighlighterSize1.displayName = 'OnesyIconMaterialHighlighterSize1';

export default IconMaterialHighlighterSize1;
