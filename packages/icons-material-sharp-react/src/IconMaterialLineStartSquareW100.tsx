import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLineStartSquareW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LineStartSquareW100'

      short_name='LineStartSquare'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M190-370h220v-220H190v220Zm248 28H162v-276h276v124h386v28H438v124ZM300-480Z"/>
    </Icon>
  );
});

IconMaterialLineStartSquareW100.displayName = 'OnesyIconMaterialLineStartSquareW100';

export default IconMaterialLineStartSquareW100;
