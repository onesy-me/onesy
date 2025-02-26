import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDoneAllFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DoneAllFilled'

      short_name='DoneAll'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M268-240 42-466l57-56 170 170 56 56-57 56Zm226 0L268-466l56-57 170 170 368-368 56 57-424 424Zm0-226-57-56 198-198 57 56-198 198Z"/>
    </Icon>
  );
});

IconMaterialDoneAllFilled.displayName = 'OnesyIconMaterialDoneAllFilled';

export default IconMaterialDoneAllFilled;
