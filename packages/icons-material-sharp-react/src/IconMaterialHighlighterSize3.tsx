import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHighlighterSize3 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HighlighterSize3'

      short_name='HighlighterSize3'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M310-170 169-311q-11-11-11-28t11-28l423-424q12-12 29-12t28 12l141 142q11 11 11 28t-11 28L367-170q-12 12-28.5 12T310-170Z"/>
    </Icon>
  );
});

IconMaterialHighlighterSize3.displayName = 'OnesyIconMaterialHighlighterSize3';

export default IconMaterialHighlighterSize3;
