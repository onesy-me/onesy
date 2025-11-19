import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialChessKing2W100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChessKing2W100Filled'

      short_name='ChessKing2'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M494-132v-250q0-23 8.5-45t23.5-40q38-48 94-75.5T742-570q52 0 89 36.5t37 89.5v312H494Zm-402 0v-312q0-53 37-89.5t89-36.5q66 0 123 29t95 78q14 17 22 37.5t8 43.5v250H92Zm374-512v-84H354v-28h112v-112h28v112h112v28H494v84q43 2 81.5 17t70.5 46q-54 11-95.5 47T480-458q-28-41-69-77t-96-46q32-31 70-46t81-17Z"/>
    </Icon>
  );
});

IconMaterialChessKing2W100Filled.displayName = 'OnesyIconMaterialChessKing2W100Filled';

export default IconMaterialChessKing2W100Filled;
