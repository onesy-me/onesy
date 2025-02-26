import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTag = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Tag'

      short_name='Tag'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m240-160 40-160H120l20-80h160l40-160H180l20-80h160l40-160h80l-40 160h160l40-160h80l-40 160h160l-20 80H660l-40 160h160l-20 80H600l-40 160h-80l40-160H360l-40 160h-80Zm140-240h160l40-160H420l-40 160Z"/>
    </Icon>
  );
});

IconMaterialTag.displayName = 'OnesyIconMaterialTag';

export default IconMaterialTag;
