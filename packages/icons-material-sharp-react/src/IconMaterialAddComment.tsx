import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAddComment = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddComment'

      short_name='AddComment'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440-400h80v-120h120v-80H520v-120h-80v120H320v80h120v120ZM80-80v-800h800v640H240L80-80Zm126-240h594v-480H160v525l46-45Zm-46 0v-480 480Z"/>
    </Icon>
  );
});

IconMaterialAddComment.displayName = 'OnesyIconMaterialAddComment';

export default IconMaterialAddComment;
