import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialChessRookW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChessRookW100Filled'

      short_name='ChessRook'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M212-132v-158q76-62 111.5-129T383-577h-98v-251h137v111h117v-111h137v251h-99q25 91 59.5 158T748-290v158H212Z"/>
    </Icon>
  );
});

IconMaterialChessRookW100Filled.displayName = 'OnesyIconMaterialChessRookW100Filled';

export default IconMaterialChessRookW100Filled;
