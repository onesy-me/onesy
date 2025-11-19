import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialStylusPencil = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StylusPencil'

      short_name='StylusPencil'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M298-320q-21 0-33-17t-4-37l170-442q5-11 14.5-17.5T466-840h28q11 0 20.5 6.5T529-816l170 442q8 20-4 37t-33 17H298Zm58-80h248L480-721 356-400Zm0 0h248-248ZM215-120q-20 0-32.5-16.5T177-173l5-12q8-25 29-40t47-15h444q26 0 47 15t29 40l5 12q7 20-5.5 36.5T745-120H215Z"/>
    </Icon>
  );
});

IconMaterialStylusPencil.displayName = 'OnesyIconMaterialStylusPencil';

export default IconMaterialStylusPencil;
