import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPersonOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PersonOffW100'

      short_name='PersonOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m784-136-96-96H242q-13 0-21.5-8.5T212-262v-22q0-22 13.5-41.5T262-356q55-26 109.5-39T480-408h16.5q8.5 0 16.5 1L136-784q-4-4-4.5-9.5T136-804q5-5 10-5t10 5l648 648q4 4 4.5 9.5T804-136q-5 5-10 5t-10-5ZM240-260h420L545-375q-17-2-32.5-3.5T480-380q-53 0-104.5 12.5T276-332q-17 9-26.5 21.5T240-284v24Zm480-85ZM541-531l-20-20q18-11 28.5-29.5T560-620q0-33-23.5-56.5T480-700q-21 0-39.5 10.5T411-661l-20-20q15-23 38.5-35t50.5-12q45 0 76.5 31.5T588-620q0 27-12 50.5T541-531Zm119 271H240h420ZM466-606Z"/>
    </Icon>
  );
});

IconMaterialPersonOffW100.displayName = 'OnesyIconMaterialPersonOffW100';

export default IconMaterialPersonOffW100;
