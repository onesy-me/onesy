import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNoAccountsW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoAccountsW100Filled'

      short_name='NoAccounts'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M578-520 421-677q11-8 26-12.5t35-4.5q47 0 79.5 33t32.5 81q0 17-5 34.5T578-520ZM252-256q54-38 108-58t120-20q56 0 101.5 14.5T654-290L478-466q-48-3-78.5-33T367-577L246-698q-38 41-62 95.5T160-480q0 69 25 124t67 100Zm466-10q34-41 58-93.5T800-480q0-133-93.5-226.5T480-800q-63 0-117.5 22T266-718l452 452ZM480-132q-73 0-136.5-27T233-233q-47-47-74-110.5T132-480q0-73 27-136.5T233-727q47-47 110.5-74T480-828q73 0 136.5 27T727-727q47 47 74 110.5T828-480q0 73-27 136.5T727-233q-47 47-110.5 74T480-132Z"/>
    </Icon>
  );
});

IconMaterialNoAccountsW100Filled.displayName = 'OnesyIconMaterialNoAccountsW100Filled';

export default IconMaterialNoAccountsW100Filled;
