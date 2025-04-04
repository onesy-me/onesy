import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPageviewFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PageviewFilled'

      short_name='Pageview'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M460-400q-42 0-71-29t-29-71q0-42 29-71t71-29q42 0 71 29t29 71q0 42-29 71t-71 29ZM160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v487q0 27-24.5 37.5T812-204L612-404q14-21 21-45t7-51q0-75-52.5-127.5T460-680q-75 0-127.5 52.5T280-500q0 75 52.5 127.5T460-320q26 0 50.5-7t45.5-21l120 120q19 19 8.5 43.5T647-160H160Z"/>
    </Icon>
  );
});

IconMaterialPageviewFilled.displayName = 'OnesyIconMaterialPageviewFilled';

export default IconMaterialPageviewFilled;
