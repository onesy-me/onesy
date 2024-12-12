import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCommentBankW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CommentBankW100'

      short_name='CommentBank'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M546-566v-234H160v552l72-72h568v-480H694v234l-74-44-74 44ZM132-180v-648h696v536H244L132-180Zm28-620v552-552Z"/>
    </Icon>
  );
});

IconMaterialCommentBankW100.displayName = 'OnesyIconMaterialCommentBankW100';

export default IconMaterialCommentBankW100;
