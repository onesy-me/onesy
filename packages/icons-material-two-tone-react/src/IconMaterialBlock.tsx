import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBlock = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Block'

      short_name='Block'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM4 12c0-4.42 3.58-8 8-8 1.85 0 3.55.63 4.9 1.69L5.69 16.9C4.63 15.55 4 13.85 4 12zm8 8c-1.85 0-3.55-.63-4.9-1.69L18.31 7.1C19.37 8.45 20 10.15 20 12c0 4.42-3.58 8-8 8z"/>
    </Icon>
  );
});

IconMaterialBlock.displayName = 'OnesyIconMaterialBlock';

export default IconMaterialBlock;
