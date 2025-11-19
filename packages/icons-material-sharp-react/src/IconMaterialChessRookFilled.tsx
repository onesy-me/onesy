import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialChessRookFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChessRookFilled'

      short_name='ChessRook'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-80v-200q81-65 122-141t58-139H240v-320h200v120h80v-120h200v320H619q17 63 58 139t123 141v200H160Z"/>
    </Icon>
  );
});

IconMaterialChessRookFilled.displayName = 'OnesyIconMaterialChessRookFilled';

export default IconMaterialChessRookFilled;
