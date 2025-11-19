import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTabCloseInactiveFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TabCloseInactiveFilled'

      short_name='TabCloseInactive'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M560-80v-80h160v80H560Zm-240 0v-80h160v80H320ZM160-560H80v-160h80v160Zm0 240H80v-160h80v160Zm80 240H80v-160h80v80h80v80Zm236-340 84-84 84 84 56-56-84-84 84-84-56-56-84 84-84-84-56 56 84 84-84 84 56 56ZM240-240v-640h640v640H240Z"/>
    </Icon>
  );
});

IconMaterialTabCloseInactiveFilled.displayName = 'OnesyIconMaterialTabCloseInactiveFilled';

export default IconMaterialTabCloseInactiveFilled;
