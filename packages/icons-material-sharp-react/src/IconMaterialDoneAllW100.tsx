import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDoneAllW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DoneAllW100'

      short_name='DoneAll'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M268-276 78-466l20-20 170 170 36-36 20 20-56 56Zm226 0L304-466l20-20 170 170 368-368 20 20-388 388Zm-36-190-20-20 198-198 20 20-198 198Z"/>
    </Icon>
  );
});

IconMaterialDoneAllW100.displayName = 'OnesyIconMaterialDoneAllW100';

export default IconMaterialDoneAllW100;
