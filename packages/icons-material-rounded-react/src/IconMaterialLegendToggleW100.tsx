import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLegendToggleW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LegendToggleW100'

      short_name='LegendToggle'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-266h560q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H200q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4Zm0-148h560q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H200q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4Zm-7-177 172-105q15-10 33-9.25T431-694l150 107q8 6 19 6t19-6l133-95q7-5 14.5-1.06 7.5 3.93 7.5 13.31 0 3.75-1.5 6.25T768-659l-133 94q-15.97 11-34.99 11Q581-554 565-565L415-671q-8-5-17.5-5.5T380-672L207-567q-7 5-14 .75T186-579q0-3.77 1.84-7.03 1.84-3.26 5.16-4.97Z"/>
    </Icon>
  );
});

IconMaterialLegendToggleW100.displayName = 'OnesyIconMaterialLegendToggleW100';

export default IconMaterialLegendToggleW100;
