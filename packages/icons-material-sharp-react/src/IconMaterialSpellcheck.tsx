import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSpellcheck = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Spellcheck'

      short_name='Spellcheck'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M564-80 394-250l56-56 114 114 226-226 56 56L564-80ZM120-320l194-520h94l194 520h-92l-46-132H254l-46 132h-88Zm162-208h156l-76-216h-4l-76 216Z"/>
    </Icon>
  );
});

IconMaterialSpellcheck.displayName = 'OnesyIconMaterialSpellcheck';

export default IconMaterialSpellcheck;
