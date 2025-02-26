import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCommentBankW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CommentBankW100Filled'

      short_name='CommentBank'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m244-292-61 61q-14 14-32.5 6.5T132-252v-516q0-26 17-43t43-17h576q26 0 43 17t17 43v416q0 26-17 43t-43 17H244Zm302-508v208q0 9 7.5 13.5t15.5-.5l40-24q5-3 11-3t11 3l40 24q8 5 15.5.5T694-592v-208H546Z"/>
    </Icon>
  );
});

IconMaterialCommentBankW100Filled.displayName = 'OnesyIconMaterialCommentBankW100Filled';

export default IconMaterialCommentBankW100Filled;
