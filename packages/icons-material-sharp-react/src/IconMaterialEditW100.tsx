import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEditW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EditW100'

      short_name='Edit'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-200h40l439-439-40-40-439 439v40Zm-28 28v-80l546-548 82 82-548 546h-80Zm588-547-41-41 41 41Zm-101.35 60.35L639-679l40 40-20.35-19.65Z"/>
    </Icon>
  );
});

IconMaterialEditW100.displayName = 'OnesyIconMaterialEditW100';

export default IconMaterialEditW100;
