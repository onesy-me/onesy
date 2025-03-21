import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTableRowsW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TableRowsW100'

      short_name='TableRows'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M760-232v-123H200v123q0 14 9 23t23 9h496q14 0 23-9t9-23Zm0-151v-194H200v194h560Zm0-222v-123q0-14-9-23t-23-9H232q-14 0-23 9t-9 23v123h560ZM232-172q-26 0-43-17t-17-43v-496q0-26 17-43t43-17h496q26 0 43 17t17 43v496q0 26-17 43t-43 17H232Z"/>
    </Icon>
  );
});

IconMaterialTableRowsW100.displayName = 'OnesyIconMaterialTableRowsW100';

export default IconMaterialTableRowsW100;
