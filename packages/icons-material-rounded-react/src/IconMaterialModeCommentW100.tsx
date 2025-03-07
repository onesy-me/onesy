import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialModeCommentW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ModeCommentW100'

      short_name='ModeComment'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M192-292q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h576q26 0 43 17t17 43v516q0 20-18.5 27.5T777-231l-61-61H192Zm536-28 72 72v-520q0-12-10-22t-22-10H192q-12 0-22 10t-10 22v416q0 12 10 22t22 10h536Zm-568 0v-480 480Z"/>
    </Icon>
  );
});

IconMaterialModeCommentW100.displayName = 'OnesyIconMaterialModeCommentW100';

export default IconMaterialModeCommentW100;
