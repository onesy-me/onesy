import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRealEstateAgentFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RealEstateAgentFilled'

      short_name='RealEstateAgent'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M760-360q0-32-19-64t-55-46L374-594l-14-4q-7-2-16-2h-64v-59q0-20 9-37t25-28l200-143q11-8 22.5-11.5T560-882q12 0 24 3.5t22 11.5l200 143q16 11 25 28t9 37v299h-80ZM600-640q8 0 14-6t6-14q0-8-6-14t-14-6q-8 0-14 6t-6 14q0 8 6 14t14 6Zm-80 0q8 0 14-6t6-14q0-8-6-14t-14-6q-8 0-14 6t-6 14q0 8 6 14t14 6Zm80 80q8 0 14-6t6-14q0-8-6-14t-14-6q-8 0-14 6t-6 14q0 8 6 14t14 6Zm-80 0q8 0 14-6t6-14q0-8-6-14t-14-6q-8 0-14 6t-6 14q0 8 6 14t14 6Zm15 473q11 3 25.5 2.5T585-89l295-111q0-34-24-57t-56-23H526q-3 0-7-.5t-6-1.5l-59-21q-8-3-11-10t-1-15q2-7 10-11t16-1l45 17q4 2 6.5 2.5t7.5.5h105q19 0 33.5-13t14.5-34q0-14-8.5-27T649-412L372-515q-7-2-14-3.5t-14-1.5h-64v361l255 72ZM40-160q0 33 23.5 56.5T120-80q33 0 56.5-23.5T200-160v-280q0-33-23.5-56.5T120-520q-33 0-56.5 23.5T40-440v280Z"/>
    </Icon>
  );
});

IconMaterialRealEstateAgentFilled.displayName = 'OnesyIconMaterialRealEstateAgentFilled';

export default IconMaterialRealEstateAgentFilled;
