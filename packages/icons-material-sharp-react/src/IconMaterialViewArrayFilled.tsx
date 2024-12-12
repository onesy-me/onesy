import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialViewArrayFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewArrayFilled'

      short_name='ViewArray'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-200v-560h120v560H120Zm160 0v-560h400v560H280Zm440 0v-560h120v560H720Z"/>
    </Icon>
  );
});

IconMaterialViewArrayFilled.displayName = 'OnesyIconMaterialViewArrayFilled';

export default IconMaterialViewArrayFilled;
