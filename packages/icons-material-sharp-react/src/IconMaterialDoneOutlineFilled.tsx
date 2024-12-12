import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDoneOutlineFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DoneOutlineFilled'

      short_name='DoneOutline'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m381-240 424-424-57-56-368 367-169-170-57 57 227 226Zm0 113L42-466l169-170 170 170 366-367 172 168-538 538Z"/>
    </Icon>
  );
});

IconMaterialDoneOutlineFilled.displayName = 'OnesyIconMaterialDoneOutlineFilled';

export default IconMaterialDoneOutlineFilled;
