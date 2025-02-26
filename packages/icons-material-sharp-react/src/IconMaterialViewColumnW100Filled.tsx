import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialViewColumnW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewColumnW100Filled'

      short_name='ViewColumn'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-252v-456h187v456H172Zm215 0v-456h186v456H387Zm214 0v-456h187v456H601Z"/>
    </Icon>
  );
});

IconMaterialViewColumnW100Filled.displayName = 'OnesyIconMaterialViewColumnW100Filled';

export default IconMaterialViewColumnW100Filled;
