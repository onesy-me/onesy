import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTakeoutDining = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TakeoutDining'

      short_name='TakeoutDining'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M312-240h338l19-280H292l20 280Zm-26-360h389l3-50-112-110H394L282-650l4 50Zm-76 68L80-662l56-56 64 64-2-24 162-162h240l162 162-2 24 64-64 56 56-130 130H210Zm28 372-28-372h540l-28 372H238Zm242-440Zm1 80Z"/>
    </Icon>
  );
});

IconMaterialTakeoutDining.displayName = 'OnesyIconMaterialTakeoutDining';

export default IconMaterialTakeoutDining;
