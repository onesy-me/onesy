import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialArrowInsertW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowInsertW100Filled'

      short_name='ArrowInsert'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M305-686v366q0 5.95-4.04 9.98-4.03 4.02-10 4.02-5.96 0-9.96-4.02-4-4.03-4-9.98v-384q0-12.75 8.63-21.38Q294.25-734 307-734h384q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H325l400 401q4 4 3.5 9.5T724-286q-4 4-9 4t-9-4L305-686Z"/>
    </Icon>
  );
});

IconMaterialArrowInsertW100Filled.displayName = 'OnesyIconMaterialArrowInsertW100Filled';

export default IconMaterialArrowInsertW100Filled;
