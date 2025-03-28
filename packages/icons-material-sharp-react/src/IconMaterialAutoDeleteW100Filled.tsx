import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAutoDeleteW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AutoDeleteW100Filled'

      short_name='AutoDelete'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M252-172v-548h-40v-28h148v-28h240v28h148v28h-40v169q-6-1-13.86-1H680q-27 0-58.57 6.82Q589.85-538.36 566-527v-113h-28v128q-38 23-70 63.5T422-366v-274h-28v360h14q0 25.9 6 55.45Q420-195 430-172H252Zm427.77 84Q600-88 544-144.23q-56-56.22-56-136Q488-360 544.23-416q56.22-56 136-56Q760-472 816-415.77q56 56.22 56 136Q872-200 815.77-144q-56.22 56-136 56ZM746-194l20-20-72-71.61V-394h-28v120l80 80Z"/>
    </Icon>
  );
});

IconMaterialAutoDeleteW100Filled.displayName = 'OnesyIconMaterialAutoDeleteW100Filled';

export default IconMaterialAutoDeleteW100Filled;
