import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRemoveDoneW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RemoveDoneW100'

      short_name='RemoveDone'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M872-128 606-394 496-284 306-474l20-20 170 170 88-90-406-406 20-20 694 694-20 18ZM270-284 80-474l20-20 170 170 36-36 20 20-56 56Zm412-186-20-20 202-202 20 20-202 202ZM568-582l-20-20 90-90 20 20-90 90Z"/>
    </Icon>
  );
});

IconMaterialRemoveDoneW100.displayName = 'OnesyIconMaterialRemoveDoneW100';

export default IconMaterialRemoveDoneW100;
