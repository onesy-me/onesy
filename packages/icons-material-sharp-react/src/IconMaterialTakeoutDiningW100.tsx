import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTakeoutDiningW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TakeoutDiningW100'

      short_name='TakeoutDining'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M312-240h336l23-296H289l23 296Zm-25-324h386l7-84-114-112H394L280-648l7 84Zm-26 28L116-672l17-22 125 118-6-82 130-130h196l130 130-6 82 125-118 17 22-145 136H261Zm25 324-25-324h438l-25 324H286Zm194-352Zm0 28Z"/>
    </Icon>
  );
});

IconMaterialTakeoutDiningW100.displayName = 'OnesyIconMaterialTakeoutDiningW100';

export default IconMaterialTakeoutDiningW100;
