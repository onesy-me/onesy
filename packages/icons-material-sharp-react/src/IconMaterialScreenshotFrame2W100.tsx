import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialScreenshotFrame2W100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScreenshotFrame2W100'

      short_name='ScreenshotFrame2'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M800-560v-120H680v-28h148v148h-28Zm-668 0v-148h148v28H160v120h-28Zm548 308v-28h120v-120h28v148H680Zm-548 0v-148h28v120h120v28H132Z"/>
    </Icon>
  );
});

IconMaterialScreenshotFrame2W100.displayName = 'OnesyIconMaterialScreenshotFrame2W100';

export default IconMaterialScreenshotFrame2W100;
