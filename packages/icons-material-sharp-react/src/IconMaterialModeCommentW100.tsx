import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialModeCommentW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ModeCommentW100'

      short_name='ModeComment'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-292v-536h696v648L716-292H132Zm28-28h568l72 72v-552H160v480Zm0 0v-480 480Z"/>
    </Icon>
  );
});

IconMaterialModeCommentW100.displayName = 'OnesyIconMaterialModeCommentW100';

export default IconMaterialModeCommentW100;
