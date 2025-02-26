import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialViewArray = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewArray'

      short_name='ViewArray'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-200v-560h120v560H120Zm160 0v-560h400v560H280Zm440 0v-560h120v560H720Zm-360-80h240v-400H360v400Zm120-200Z"/>
    </Icon>
  );
});

IconMaterialViewArray.displayName = 'OnesyIconMaterialViewArray';

export default IconMaterialViewArray;
