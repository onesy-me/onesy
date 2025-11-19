import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialStylusHighlighterW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StylusHighlighterW100Filled'

      short_name='StylusHighlighter'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M315-356v-432h74l255 124v308H315ZM212-172l31-84h474l31 84H212Z"/>
    </Icon>
  );
});

IconMaterialStylusHighlighterW100Filled.displayName = 'OnesyIconMaterialStylusHighlighterW100Filled';

export default IconMaterialStylusHighlighterW100Filled;
