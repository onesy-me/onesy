import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRouter = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Router'

      short_name='Router'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-120v-320h480v-160h80v160h160v320H120Zm80-80h560v-160H200v160Zm370-430-58-58q26-24 58-38t70-14q38 0 70 14t58 38l-58 58q-14-14-31.5-22t-38.5-8q-21 0-38.5 8T570-630ZM470-730l-56-56q44-44 102-69t124-25q66 0 124 25t102 69l-56 56q-33-33-76.5-51.5T640-800q-50 0-93.5 18.5T470-730ZM200-200v-160 160Zm40-40h80v-80h-80v80Zm140 0h80v-80h-80v80Zm140 0h80v-80h-80v80Z"/>
    </Icon>
  );
});

IconMaterialRouter.displayName = 'OnesyIconMaterialRouter';

export default IconMaterialRouter;
