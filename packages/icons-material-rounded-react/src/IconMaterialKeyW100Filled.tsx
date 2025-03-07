import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialKeyW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyW100Filled'

      short_name='Key'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-420q-25 0-42.5-17.5T220-480q0-25 17.5-42.5T280-540q25 0 42.5 17.5T340-480q0 25-17.5 42.5T280-420Zm0 114q64 0 110.5-36t57.5-84h144l40 27q4 2 8 3.5t9 1.5q5 0 9-1.5t8-4.5l55-39 42 32q5 3 10.5 5t10.5 1q5-1 10-3t9-6l48-49q5-5 7-10t2-11q0-6-2-11t-7-10l-24-24q-5-5-10.5-7t-11.5-2H448q-11-48-57.5-84T280-654q-74 0-124 50t-50 124q0 74 50 124t124 50Z"/>
    </Icon>
  );
});

IconMaterialKeyW100Filled.displayName = 'OnesyIconMaterialKeyW100Filled';

export default IconMaterialKeyW100Filled;
