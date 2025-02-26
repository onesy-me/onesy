import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSortW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SortW100Filled'

      short_name='Sort'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M186-292q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h147q5.95 0 9.98 4.04 4.02 4.03 4.02 10 0 5.96-4.02 9.96-4.03 4-9.98 4H186Zm0-174q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h367q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H186Zm0-174q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h588q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H186Z"/>
    </Icon>
  );
});

IconMaterialSortW100Filled.displayName = 'OnesyIconMaterialSortW100Filled';

export default IconMaterialSortW100Filled;
