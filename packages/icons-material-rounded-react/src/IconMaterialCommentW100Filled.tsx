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
      <path d="M280-426h400q5.95 0 9.97-4.04 4.03-4.03 4.03-10 0-5.96-4.03-9.96-4.02-4-9.97-4H280q-5.95 0-9.98 4.04-4.02 4.03-4.02 10 0 5.96 4.02 9.96 4.03 4 9.98 4Zm0-120h400q5.95 0 9.97-4.04 4.03-4.03 4.03-10 0-5.96-4.03-9.96-4.02-4-9.97-4H280q-5.95 0-9.98 4.04-4.02 4.03-4.02 10 0 5.96 4.02 9.96 4.03 4 9.98 4Zm0-120h400q5.95 0 9.97-4.04 4.03-4.03 4.03-10 0-5.96-4.03-9.96-4.02-4-9.97-4H280q-5.95 0-9.98 4.04-4.02 4.03-4.02 10 0 5.96 4.02 9.96 4.03 4 9.98 4Zm-88 374q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h576q26 0 43 17t17 43v516q0 19.69-18.5 27.34Q791-217 777-231l-61-61H192Z"/>
    </Icon>
  );
});

IconMaterialCommentW100Filled.displayName = 'OnesyIconMaterialCommentW100Filled';

export default IconMaterialCommentW100Filled;
