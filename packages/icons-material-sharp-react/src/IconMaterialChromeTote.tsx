import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialChromeTote = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChromeTote'

      short_name='ChromeTote'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M513 856h226v51l-589 74-74-597 125-14v80l-36 4 54 438 294-36Zm-232-80V176h600v600H281Zm80-80h440V256H361v440ZM219 892Zm142-196V256v440Zm220-60 160-160-56-57-64 63V316h-80v166l-64-63-56 57 160 160Z"/>
    </Icon>
  );
});

IconMaterialChromeTote.displayName = 'OnesyIconMaterialChromeTote';

export default IconMaterialChromeTote;
