import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCompareArrows = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CompareArrows'

      short_name='CompareArrows'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m320-160-56-57 103-103H80v-80h287L264-503l56-57 200 200-200 200Zm320-240L440-600l200-200 56 57-103 103h287v80H593l103 103-56 57Z"/>
    </Icon>
  );
});

IconMaterialCompareArrows.displayName = 'OnesyIconMaterialCompareArrows';

export default IconMaterialCompareArrows;
