import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMail = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Mail'

      short_name='Mail'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-160v-640h800v640H80Zm400-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z"/>
    </Icon>
  );
});

IconMaterialMail.displayName = 'OnesyIconMaterialMail';

export default IconMaterialMail;
