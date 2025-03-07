import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMatchCaseW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MatchCaseW100Filled'

      short_name='MatchCase'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m246-400-38 110q-2 5-5.5 7.5T194-280q-8 0-12.5-6.5T180-301l134-369q2-5 6-7.5t9-2.5h11q5 0 9 2.5t6 7.5l137 368q3 8-2 15t-13 7q-5 0-9.5-3t-6.5-8l-38-109H246Zm11-28h156l-77-217h-2l-77 217Zm383 157q-45 0-72.5-25.5T540-359q0-42 33-66.5t85-24.5q21 0 43 4.5t39 12.5v-27q0-42-19.5-63T662-544q-17 0-33.5 5.5T598-524q-5 4-10 2t-8-7q-3-5-2-10t7-9q17-11 37-16.5t40-5.5q54 0 80 28.5t26 85.5v162q0 6-4 10t-10 4q-6 0-10-4t-4-10v-28h-4q-18 26-40.5 38.5T640-271Zm0-26q43 0 71.5-31t28.5-79q-14-8-36-12.5t-43-4.5q-42 0-67 16.5T569-359q0 26 19.5 44t51.5 18Z"/>
    </Icon>
  );
});

IconMaterialMatchCaseW100Filled.displayName = 'OnesyIconMaterialMatchCaseW100Filled';

export default IconMaterialMatchCaseW100Filled;
