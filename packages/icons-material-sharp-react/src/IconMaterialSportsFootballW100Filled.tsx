import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSportsFootballW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SportsFootballW100Filled'

      short_name='SportsFootball'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M400-177q-43 6-111.5 4.5T185-189q-11-33-13-100t6-110l222 222Zm34-6L184-433q17-70 46-132t66-99q38-38 104-69.5T527-775l249 251q-11 67-41 129t-69 101q-41 41-103.5 71T434-183Zm-45-186 202-202-20-20-202 202 20 20Zm393-189L562-782q40-8 107.5-5.5T770-773q16 39 18 103t-6 112Z"/>
    </Icon>
  );
});

IconMaterialSportsFootballW100Filled.displayName = 'OnesyIconMaterialSportsFootballW100Filled';

export default IconMaterialSportsFootballW100Filled;
