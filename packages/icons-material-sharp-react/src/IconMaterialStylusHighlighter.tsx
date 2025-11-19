import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialStylusHighlighter = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StylusHighlighter'

      short_name='StylusHighlighter'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-320v-520h99l301 149v371H280Zm80-80h240v-241L360-760v360ZM160-120l40-120h560l40 120H160Zm200-280h240-240Z"/>
    </Icon>
  );
});

IconMaterialStylusHighlighter.displayName = 'OnesyIconMaterialStylusHighlighter';

export default IconMaterialStylusHighlighter;
