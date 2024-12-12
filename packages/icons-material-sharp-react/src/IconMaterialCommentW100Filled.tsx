import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCommentW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CommentW100Filled'

      short_name='Comment'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M266-426h428v-28H266v28Zm0-120h428v-28H266v28Zm0-120h428v-28H266v28ZM132-292v-536h696v648L716-292H132Z"/>
    </Icon>
  );
});

IconMaterialCommentW100Filled.displayName = 'OnesyIconMaterialCommentW100Filled';

export default IconMaterialCommentW100Filled;
