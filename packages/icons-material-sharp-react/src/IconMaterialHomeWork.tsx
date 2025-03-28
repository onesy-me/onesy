import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHomeWork = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HomeWork'

      short_name='HomeWork'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M680-600h80v-80h-80v80Zm0 160h80v-80h-80v80Zm0 160h80v-80h-80v80Zm0 160v-80h160v-560H480v56l-80-58v-78h520v720H680Zm-640 0v-400l280-200 280 200v400H360v-200h-80v200H40Zm80-80h80v-200h240v200h80v-280L320-622 120-480v280Zm560-360ZM440-200v-200H200v200-200h240v200Z"/>
    </Icon>
  );
});

IconMaterialHomeWork.displayName = 'OnesyIconMaterialHomeWork';

export default IconMaterialHomeWork;
