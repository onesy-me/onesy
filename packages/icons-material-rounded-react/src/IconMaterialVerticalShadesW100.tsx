import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialVerticalShadesW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VerticalShadesW100'

      short_name='VerticalShades'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M146-172q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h66v-528q0-24.75 17.63-42.38Q247.25-788 272-788h416q24.75 0 42.38 17.62Q748-752.75 748-728v528h66q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H146Zm94-28h119v-560h-87q-14 0-23 9t-9 23v528Zm147 0h186v-560H387v560Zm214 0h119v-528q0-14-9-23t-23-9h-87v560Zm-361 0v-560 560Zm480 0v-560 560Z"/>
    </Icon>
  );
});

IconMaterialVerticalShadesW100.displayName = 'OnesyIconMaterialVerticalShadesW100';

export default IconMaterialVerticalShadesW100;
