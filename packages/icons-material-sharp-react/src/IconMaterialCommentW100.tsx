import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCommentW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CommentW100'

      short_name='Comment'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M266-426h428v-28H266v28Zm0-120h428v-28H266v28Zm0-120h428v-28H266v28ZM132-292v-536h696v648L716-292H132Zm28-28h568l72 72v-552H160v480Zm0 0v-480 480Z"/>
    </Icon>
  );
});

IconMaterialCommentW100.displayName = 'OnesyIconMaterialCommentW100';

export default IconMaterialCommentW100;
