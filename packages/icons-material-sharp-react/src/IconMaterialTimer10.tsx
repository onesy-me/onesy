import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTimer10 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Timer10'

      short_name='Timer10'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M560-320h120v-320H560v320ZM440-200v-560h360v560H440Zm-200 0v-440h-80v-120h200v560H240Z"/>
    </Icon>
  );
});

IconMaterialTimer10.displayName = 'OnesyIconMaterialTimer10';

export default IconMaterialTimer10;
