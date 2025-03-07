import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPersonOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PersonOffW100Filled'

      short_name='PersonOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m784-136-96-96H242q-13 0-21.5-8.5T212-262v-22q0-22 13.5-41.5T262-356q55-26 109.5-39T480-408h16.5q8.5 0 16.5 1L136-784q-4-4-4.5-9.5T136-804q5-5 10-5t10 5l648 648q4 4 4.5 9.5T804-136q-5 5-10 5t-10-5Zm-64-209ZM541-531 391-681q15-23 38.5-35t50.5-12q45 0 76.5 31.5T588-620q0 27-12 50.5T541-531Z"/>
    </Icon>
  );
});

IconMaterialPersonOffW100Filled.displayName = 'OnesyIconMaterialPersonOffW100Filled';

export default IconMaterialPersonOffW100Filled;
