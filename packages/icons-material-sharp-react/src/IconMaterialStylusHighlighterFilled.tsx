import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialStylusHighlighterFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StylusHighlighterFilled'

      short_name='StylusHighlighter'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-320v-520h99l301 149v371H280ZM160-120l40-120h560l40 120H160Z"/>
    </Icon>
  );
});

IconMaterialStylusHighlighterFilled.displayName = 'OnesyIconMaterialStylusHighlighterFilled';

export default IconMaterialStylusHighlighterFilled;
