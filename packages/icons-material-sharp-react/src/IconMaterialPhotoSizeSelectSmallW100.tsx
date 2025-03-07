import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPhotoSizeSelectSmallW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhotoSizeSelectSmallW100'

      short_name='PhotoSizeSelectSmall'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-172v-348h348v348H172Zm428 0v-28h80v28h-80Zm-388-80h268l-86-118-64 84-48-62-70 96Zm548-28v-80h28v80h-28Zm0-160v-80h28v80h-28ZM172-600v-80h28v80h-28Zm588 0v-80h28v80h-28ZM280-760v-28h80v28h-80Zm160 0v-28h80v28h-80Zm160 0v-28h80v28h-80Zm-428 0v-28h28v28h-28Zm616 0h-28v-28h28v28Zm-28 588v-28h28v28h-28Z"/>
    </Icon>
  );
});

IconMaterialPhotoSizeSelectSmallW100.displayName = 'OnesyIconMaterialPhotoSizeSelectSmallW100';

export default IconMaterialPhotoSizeSelectSmallW100;
