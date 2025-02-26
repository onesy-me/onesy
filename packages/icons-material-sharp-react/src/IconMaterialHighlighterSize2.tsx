import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHighlighterSize2 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HighlighterSize2'

      short_name='HighlighterSize2'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m282-198-84-84q-12-12-12-28.5t12-28.5l423-423q12-12 28.5-12t28.5 12l84 85q11 11 11 28t-11 28L339-198q-12 12-28.5 12T282-198Z"/>
    </Icon>
  );
});

IconMaterialHighlighterSize2.displayName = 'OnesyIconMaterialHighlighterSize2';

export default IconMaterialHighlighterSize2;
