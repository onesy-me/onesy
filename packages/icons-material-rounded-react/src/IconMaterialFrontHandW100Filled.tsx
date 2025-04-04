import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFrontHandW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FrontHandW100Filled'

      short_name='FrontHand'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M500.2-92Q380-92 296-175.86 212-259.72 212-380v-354q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v232h114v-286q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v286h115v-326q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v326h115v-246q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v217q-14 17-21 36.39-7 19.4-7 40.61v50h-36q-56.28 0-95.14 38.86T470-270v14q0 6.07 3.95 10.03 3.96 3.97 10 3.97 6.05 0 10.05-3.97 4-3.96 4-10.03v-14q0-44.76 30.62-75.38Q559.24-376 604-376h34q12.75 0 21.38-8.63Q668-393.25 668-406v-48q0-38 27-65t65-27q11 0 19.5 8.5T788-518v138q0 120.28-83.8 204.14Q620.4-92 500.2-92Z"/>
    </Icon>
  );
});

IconMaterialFrontHandW100Filled.displayName = 'OnesyIconMaterialFrontHandW100Filled';

export default IconMaterialFrontHandW100Filled;
