import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialViewDayW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewDayW100Filled'

      short_name='ViewDay'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-224v-28h616v28H172Zm0-148v-216h616v216H172Zm0-336v-28h616v28H172Z"/>
    </Icon>
  );
});

IconMaterialViewDayW100Filled.displayName = 'OnesyIconMaterialViewDayW100Filled';

export default IconMaterialViewDayW100Filled;
