import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMenuOpenW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MenuOpenW100Filled'

      short_name='MenuOpen'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M186-292q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h410q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H186Zm572-45L635-459q-9-9-9-21t9-21l123-121q4-4 9.5-4.5T778-622q5 5 5 10t-5 10L653-480l125 123q5 3.67 5 9.33 0 5.67-5 10.67-3.67 4-9.33 4-5.67 0-10.67-4ZM186-466q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h298q5.95 0 9.98 4.04 4.02 4.03 4.02 10 0 5.96-4.02 9.96-4.03 4-9.98 4H186Zm0-174q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h410q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H186Z"/>
    </Icon>
  );
});

IconMaterialMenuOpenW100Filled.displayName = 'OnesyIconMaterialMenuOpenW100Filled';

export default IconMaterialMenuOpenW100Filled;
