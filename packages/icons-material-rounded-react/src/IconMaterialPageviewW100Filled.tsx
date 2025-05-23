import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPageviewW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PageviewW100Filled'

      short_name='Pageview'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M460-400q-42 0-71-29t-29-71q0-42 29-71t71-29q42 0 71 29t29 71q0 42-29 71t-71 29ZM192-212q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h576q26 0 43 17t17 43v450q0 20-18.5 27.5T777-217L566-428q14-20 18-36t4-36q0-53-37.5-90.5T460-628q-53 0-90.5 37.5T332-500q0 53 37.5 90.5T460-372q26 0 48-8.5t40-25.5l143 143q14 14 6.5 32.5T670-212H192Z"/>
    </Icon>
  );
});

IconMaterialPageviewW100Filled.displayName = 'OnesyIconMaterialPageviewW100Filled';

export default IconMaterialPageviewW100Filled;
