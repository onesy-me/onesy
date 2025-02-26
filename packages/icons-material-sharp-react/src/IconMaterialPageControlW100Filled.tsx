import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPageControlW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PageControlW100Filled'

      short_name='PageControl'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M159.91-410q-28.91 0-49.41-20.59Q90-451.18 90-480.09t20.59-49.41q20.59-20.5 49.5-20.5t49.41 20.59q20.5 20.59 20.5 49.5t-20.59 49.41q-20.59 20.5-49.5 20.5Zm.09-28q17 0 29.5-12.5T202-480q0-17-12.5-29.5T160-522q-17 0-29.5 12.5T118-480q0 17 12.5 29.5T160-438Zm211.91 28q-28.91 0-49.41-20.59-20.5-20.59-20.5-49.5t20.59-49.41q20.59-20.5 49.5-20.5t49.41 20.59q20.5 20.59 20.5 49.5t-20.59 49.41q-20.59 20.5-49.5 20.5Zm.09-28q17 0 29.5-12.5T414-480q0-17-12.5-29.5T372-522q-17 0-29.5 12.5T330-480q0 17 12.5 29.5T372-438Zm213.91 28q-28.91 0-49.41-20.59-20.5-20.59-20.5-49.5t20.59-49.41q20.59-20.5 49.5-20.5t49.41 20.59q20.5 20.59 20.5 49.5t-20.59 49.41q-20.59 20.5-49.5 20.5Zm.09-28q17 0 29.5-12.5T628-480q0-17-12.5-29.5T586-522q-17 0-29.5 12.5T544-480q0 17 12.5 29.5T586-438Zm213.91 28q-28.91 0-49.41-20.59-20.5-20.59-20.5-49.5t20.59-49.41q20.59-20.5 49.5-20.5t49.41 20.59q20.5 20.59 20.5 49.5t-20.59 49.41q-20.59 20.5-49.5 20.5Z"/>
    </Icon>
  );
});

IconMaterialPageControlW100Filled.displayName = 'OnesyIconMaterialPageControlW100Filled';

export default IconMaterialPageControlW100Filled;
