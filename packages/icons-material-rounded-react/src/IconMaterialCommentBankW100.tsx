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
      <path d="m244-292-61 61q-14 14-32.5 6.5T132-252v-516q0-26 17-43t43-17h576q26 0 43 17t17 43v416q0 26-17 43t-43 17H244Zm524-28q12 0 22-10t10-22v-416q0-12-10-22t-22-10h-74v208q0 9-7.5 13.5T671-579l-40-24q-5-3-11-3t-11 3l-40 24q-8 5-15.5.5T546-592v-208H192q-12 0-22 10t-10 22v520l72-72h536Zm-608 0v-480 552-72Z"/>
    </Icon>
  );
});

IconMaterialCommentBankW100.displayName = 'OnesyIconMaterialCommentBankW100';

export default IconMaterialCommentBankW100;
