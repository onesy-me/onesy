import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHighlighterSize4 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HighlighterSize4'

      short_name='HighlighterSize4'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M353-127 127-353q-12-12-12-28.5t12-28.5l423-423q12-12 28.5-12t27.5 12l227 226q12 12 12 28.5T833-550L410-127q-12 12-28.5 12T353-127Z"/>
    </Icon>
  );
});

IconMaterialHighlighterSize4.displayName = 'OnesyIconMaterialHighlighterSize4';

export default IconMaterialHighlighterSize4;
