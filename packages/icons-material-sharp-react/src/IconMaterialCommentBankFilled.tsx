import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCommentBankFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CommentBankFilled'

      short_name='CommentBank'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m500-520 100-60 100 60v-280H500v280ZM80-80v-800h800v640H240L80-80Z"/>
    </Icon>
  );
});

IconMaterialCommentBankFilled.displayName = 'OnesyIconMaterialCommentBankFilled';

export default IconMaterialCommentBankFilled;
