import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialQuickreplyW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='QuickreplyW100Filled'

      short_name='Quickreply'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M756-292h-10q-13 0-21.5-8.5T716-322v-108q0-13 8.5-21.5T746-460h24q11 0 18.5 9t3.5 20l-29 91h32q12 0 19 10t2 21l-46 116q-2 6-8 4.5t-6-7.5v-96Zm-512 0-61 61q-14 14-32.5 6.5T132-252v-516q0-26 17-43t43-17h576q26 0 43 17t17 43v158q0 13-8.5 21.5T798-580H656q-25 0-42.5 17.5T596-520v198q0 13-8.5 21.5T566-292H244Z"/>
    </Icon>
  );
});

IconMaterialQuickreplyW100Filled.displayName = 'OnesyIconMaterialQuickreplyW100Filled';

export default IconMaterialQuickreplyW100Filled;
