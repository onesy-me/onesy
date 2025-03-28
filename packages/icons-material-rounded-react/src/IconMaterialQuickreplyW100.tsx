import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialQuickreplyW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='QuickreplyW100'

      short_name='Quickreply'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m244-292-61 61q-14 14-32.5 6.5T132-252v-516q0-26 17-43t43-17h576q26 0 43 17t17 43v174q0 6-4 10t-10 4q-6 0-10-4t-4-10v-174q0-12-10-22t-22-10H192q-12 0-22 10t-10 22v520l72-72h350q6 0 10 4t4 10q0 6-4 10t-10 4H244Zm512 0h-10q-13 0-21.5-8.5T716-322v-108q0-13 8.5-21.5T746-460h24q11 0 18.5 9t3.5 20l-29 91h32q12 0 19 10t2 21l-46 116q-2 6-8 4.5t-6-7.5v-96Zm-596-28v72-552 480Z"/>
    </Icon>
  );
});

IconMaterialQuickreplyW100.displayName = 'OnesyIconMaterialQuickreplyW100';

export default IconMaterialQuickreplyW100;
