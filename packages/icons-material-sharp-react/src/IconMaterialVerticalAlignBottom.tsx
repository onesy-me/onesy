import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialVerticalAlignBottom = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VerticalAlignBottom'

      short_name='VerticalAlignBottom'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-120v-80h640v80H160Zm320-160L280-480l56-56 104 104v-408h80v408l104-104 56 56-200 200Z"/>
    </Icon>
  );
});

IconMaterialVerticalAlignBottom.displayName = 'OnesyIconMaterialVerticalAlignBottom';

export default IconMaterialVerticalAlignBottom;
