import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialChessKnightW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChessKnightW100Filled'

      short_name='ChessKnight'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M246-131v-157l216-112v-117l-156 81q-8 5-17.5 6.5T270-428q-22 0-41.5-11.5T198-473q-10-20-8-42t14-40l119-185-58-89h176q111 0 188 80t77 195v423H246Z"/>
    </Icon>
  );
});

IconMaterialChessKnightW100Filled.displayName = 'OnesyIconMaterialChessKnightW100Filled';

export default IconMaterialChessKnightW100Filled;
