import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLineStartSquareW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LineStartSquareW100Filled'

      short_name='LineStartSquare'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M438-342H162v-276h276v124h386v28H438v124Z"/>
    </Icon>
  );
});

IconMaterialLineStartSquareW100Filled.displayName = 'OnesyIconMaterialLineStartSquareW100Filled';

export default IconMaterialLineStartSquareW100Filled;
