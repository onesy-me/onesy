import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialModeCommentW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ModeCommentW100Filled'

      short_name='ModeComment'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-292v-536h696v648L716-292H132Z"/>
    </Icon>
  );
});

IconMaterialModeCommentW100Filled.displayName = 'OnesyIconMaterialModeCommentW100Filled';

export default IconMaterialModeCommentW100Filled;
