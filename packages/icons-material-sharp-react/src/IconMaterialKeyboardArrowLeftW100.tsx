import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialKeyboardArrowLeftW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyboardArrowLeftW100'

      short_name='KeyboardArrowLeft'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M560-276 356-480l204-204 20 20-184 184 184 184-20 20Z"/>
    </Icon>
  );
});

IconMaterialKeyboardArrowLeftW100.displayName = 'OnesyIconMaterialKeyboardArrowLeftW100';

export default IconMaterialKeyboardArrowLeftW100;
