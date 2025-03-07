import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTitleW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TitleW100'

      short_name='Title'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M466-719H267q-5.83 0-9.92-4.12-4.08-4.12-4.08-10t4.08-10.38q4.09-4.5 9.92-4.5h427q5.83 0 9.92 4.12 4.08 4.12 4.08 10t-4.08 10.38q-4.09 4.5-9.92 4.5H495v493q0 5.83-4.12 9.92-4.12 4.08-10 4.08t-10.38-4.38Q466-220.75 466-227v-492Z"/>
    </Icon>
  );
});

IconMaterialTitleW100.displayName = 'OnesyIconMaterialTitleW100';

export default IconMaterialTitleW100;
