import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHighlightFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HighlightFilled'

      short_name='Highlight'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m226-640-86-84 56-58 86 86-56 56Zm214-120v-120h80v120h-80Zm296 120-58-56 86-84 56 56-84 84ZM360-80v-200L240-400v-200h480v200L600-280v200H360Z"/>
    </Icon>
  );
});

IconMaterialHighlightFilled.displayName = 'OnesyIconMaterialHighlightFilled';

export default IconMaterialHighlightFilled;
