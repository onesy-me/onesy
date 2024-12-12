import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAddCommentW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddCommentW100Filled'

      short_name='AddComment'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M466-426h28v-120h120v-28H494v-120h-28v120H346v28h120v120ZM132-180v-648h696v536H244L132-180Z"/>
    </Icon>
  );
});

IconMaterialAddCommentW100Filled.displayName = 'OnesyIconMaterialAddCommentW100Filled';

export default IconMaterialAddCommentW100Filled;
