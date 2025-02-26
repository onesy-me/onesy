import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialViewQuiltW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewQuiltW100'

      short_name='ViewQuilt'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-252v-456h616v456H172Zm221-242h367v-186H393v186Zm197 214h170v-186H590v186Zm-197 0h169v-186H393v186Zm-193 0h165v-400H200v400Z"/>
    </Icon>
  );
});

IconMaterialViewQuiltW100.displayName = 'OnesyIconMaterialViewQuiltW100';

export default IconMaterialViewQuiltW100;
