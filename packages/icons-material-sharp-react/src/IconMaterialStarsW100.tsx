import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialStarsW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StarsW100'

      short_name='Stars'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m346-278 134-102 134 102-50-166 133-94H534l-54-174-54 174H263l133 94-50 166Zm134.17 146q-72.17 0-135.73-27.39-63.56-27.39-110.57-74.35-47.02-46.96-74.44-110.43Q132-407.65 132-479.83q0-72.17 27.39-135.73 27.39-63.56 74.35-110.57 46.96-47.02 110.43-74.44Q407.65-828 479.83-828q72.17 0 135.73 27.39 63.56 27.39 110.57 74.35 47.02 46.96 74.44 110.43Q828-552.35 828-480.17q0 72.17-27.39 135.73-27.39 63.56-74.35 110.57-46.96 47.02-110.43 74.44Q552.35-132 480.17-132Zm-.17-28q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/>
    </Icon>
  );
});

IconMaterialStarsW100.displayName = 'OnesyIconMaterialStarsW100';

export default IconMaterialStarsW100;
