import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAddCommentFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddCommentFilled'

      short_name='AddComment'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440-400h80v-120h120v-80H520v-120h-80v120H320v80h120v120ZM80-80v-800h800v640H240L80-80Z"/>
    </Icon>
  );
});

IconMaterialAddCommentFilled.displayName = 'OnesyIconMaterialAddCommentFilled';

export default IconMaterialAddCommentFilled;
