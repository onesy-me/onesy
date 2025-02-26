import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLoginW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LoginW100Filled'

      short_name='Login'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M479-172v-28h281v-560H479v-28h309v616H479Zm-13-184-20-20 90-90H173v-28h363l-90-90 20-20 124 124-124 124Z"/>
    </Icon>
  );
});

IconMaterialLoginW100Filled.displayName = 'OnesyIconMaterialLoginW100Filled';

export default IconMaterialLoginW100Filled;
