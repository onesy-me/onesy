import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCropSquareFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CropSquareFilled'

      short_name='CropSquare'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-120v-720h720v720H120Z"/>
    </Icon>
  );
});

IconMaterialCropSquareFilled.displayName = 'OnesyIconMaterialCropSquareFilled';

export default IconMaterialCropSquareFilled;
