import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialGoToLineFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GoToLineFilled'

      short_name='GoToLine'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M420-680v-120h120v120H420Zm0 520v-120h120v120H420Z"/>
    </Icon>
  );
});

IconMaterialGoToLineFilled.displayName = 'OnesyIconMaterialGoToLineFilled';

export default IconMaterialGoToLineFilled;
