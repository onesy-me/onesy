import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialVerticalShadesW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VerticalShadesW100Filled'

      short_name='VerticalShades'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M146-172q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h66v-528q0-24.75 17.63-42.38Q247.25-788 272-788h416q24.75 0 42.38 17.62Q748-752.75 748-728v528h66q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H146Zm241-28h186v-560H387v560Z"/>
    </Icon>
  );
});

IconMaterialVerticalShadesW100Filled.displayName = 'OnesyIconMaterialVerticalShadesW100Filled';

export default IconMaterialVerticalShadesW100Filled;
