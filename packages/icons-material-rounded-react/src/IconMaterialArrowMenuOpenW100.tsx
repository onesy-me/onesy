import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialArrowMenuOpenW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowMenuOpenW100'

      short_name='ArrowMenuOpen'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M412-186v-588q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v588q0 5.95-4.04 9.98-4.03 4.02-10 4.02-5.96 0-9.96-4.02-4-4.03-4-9.98Zm128-203v-181q0-11.08 9.5-15.04Q559-589 566-581l76 80q8 9 8 21t-8 21l-76 80q-7 8-16.5 4.25T540-389Z"/>
    </Icon>
  );
});

IconMaterialArrowMenuOpenW100.displayName = 'OnesyIconMaterialArrowMenuOpenW100';

export default IconMaterialArrowMenuOpenW100;
