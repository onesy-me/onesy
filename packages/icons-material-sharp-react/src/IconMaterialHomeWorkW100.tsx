import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHomeWorkW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HomeWorkW100'

      short_name='HomeWork'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M692-612h56v-56h-56v56Zm0 160h56v-56h-56v56Zm0 160h56v-56h-56v56Zm-64 120v-28h212v-560H448v97l-28-20v-105h448v616H628Zm-536 0v-322l228-162 228 162v322H374v-174H266v174H92Zm28-28h118v-174h164v174h118v-280L320-620 120-480v280Zm508-334ZM402-200v-174H238v174-174h164v174Z"/>
    </Icon>
  );
});

IconMaterialHomeWorkW100.displayName = 'OnesyIconMaterialHomeWorkW100';

export default IconMaterialHomeWorkW100;
