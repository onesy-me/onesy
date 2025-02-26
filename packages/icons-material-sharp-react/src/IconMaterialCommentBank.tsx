import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCommentBank = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CommentBank'

      short_name='CommentBank'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M500-520v-280H160v525l46-45h594v-480H700v280l-100-60-100 60ZM80-80v-800h800v640H240L80-80Zm80-720v480-480Z"/>
    </Icon>
  );
});

IconMaterialCommentBank.displayName = 'OnesyIconMaterialCommentBank';

export default IconMaterialCommentBank;
