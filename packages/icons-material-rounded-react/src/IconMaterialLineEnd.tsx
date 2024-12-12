import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLineEnd = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LineEnd'

      short_name='LineEnd'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M780-380q-31 0-56-17t-36-43H120q-17 0-28.5-11.5T80-480q0-17 11.5-28.5T120-520h568q11-26 36-43t56-17q42 0 71 29t29 71q0 42-29 71t-71 29Z"/>
    </Icon>
  );
});

IconMaterialLineEnd.displayName = 'OnesyIconMaterialLineEnd';

export default IconMaterialLineEnd;
