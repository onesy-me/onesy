import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHighlighterSize5 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HighlighterSize5'

      short_name='HighlighterSize5'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M410-70 70-410q-11-11-11-28t11-28l424-424q11-11 27.5-11t28.5 12l340 339q11 11 11 28t-11 28L466-70q-11 11-28 11t-28-11Z"/>
    </Icon>
  );
});

IconMaterialHighlighterSize5.displayName = 'OnesyIconMaterialHighlighterSize5';

export default IconMaterialHighlighterSize5;
