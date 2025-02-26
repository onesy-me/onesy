import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSubdirectoryArrowRight = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SubdirectoryArrowRight'

      short_name='SubdirectoryArrowRight'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m560-120-57-57 144-143H200v-480h80v400h367L503-544l56-57 241 241-240 240Z"/>
    </Icon>
  );
});

IconMaterialSubdirectoryArrowRight.displayName = 'OnesyIconMaterialSubdirectoryArrowRight';

export default IconMaterialSubdirectoryArrowRight;
