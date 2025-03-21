import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPhotoSizeSelectLargeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhotoSizeSelectLargeW100Filled'

      short_name='PhotoSizeSelectLarge'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-172v-468h468v468H172Zm80-68h308L456-378l-80 108-50-66-74 96Zm508-30v-80h28v80h-28Zm0-170v-80h28v80h-28Zm0-170v-80h28v80h-28ZM280-760v-28h80v28h-80Zm160 0v-28h80v28h-80Zm160 0v-28h80v28h-80Zm-428 0v-28h28v28h-28Zm616 0h-28v-28h28v28Zm-28 588v-28h28v28h-28Z"/>
    </Icon>
  );
});

IconMaterialPhotoSizeSelectLargeW100Filled.displayName = 'OnesyIconMaterialPhotoSizeSelectLargeW100Filled';

export default IconMaterialPhotoSizeSelectLargeW100Filled;
