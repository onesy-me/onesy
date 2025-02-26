import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLoginW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LoginW100'

      short_name='Login'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M479-172v-28h281v-560H479v-28h309v616H479Zm-13-184-20-20 90-90H172v-28h364l-90-90 20-20 124 124-124 124Z"/>
    </Icon>
  );
});

IconMaterialLoginW100.displayName = 'OnesyIconMaterialLoginW100';

export default IconMaterialLoginW100;
