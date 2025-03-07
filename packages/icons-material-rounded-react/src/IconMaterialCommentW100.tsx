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
      <path d="M280-426h400q6 0 10-4t4-10q0-6-4-10t-10-4H280q-6 0-10 4t-4 10q0 6 4 10t10 4Zm0-120h400q6 0 10-4t4-10q0-6-4-10t-10-4H280q-6 0-10 4t-4 10q0 6 4 10t10 4Zm0-120h400q6 0 10-4t4-10q0-6-4-10t-10-4H280q-6 0-10 4t-4 10q0 6 4 10t10 4Zm-88 374q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h576q26 0 43 17t17 43v516q0 20-18.5 27.5T777-231l-61-61H192Zm536-28 72 72v-520q0-12-10-22t-22-10H192q-12 0-22 10t-10 22v416q0 12 10 22t22 10h536Zm-568 0v-480 480Z"/>
    </Icon>
  );
});

IconMaterialCommentW100.displayName = 'OnesyIconMaterialCommentW100';

export default IconMaterialCommentW100;
