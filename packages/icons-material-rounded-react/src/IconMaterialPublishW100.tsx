import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPublishW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PublishW100'

      short_name='Publish'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m466-564-80 80q-4 4-9.5 4.5T366-484q-5-5-5-10t5-10l93-93q5-5 10-7t11-2q6 0 11 2t10 7l93 93q4 4 4.5 9.5T594-484q-5 5-10 5t-10-5l-80-80v338q0 6-4 10t-10 4q-6 0-10-4t-4-10v-338Zm-254-48v-76q0-26 17-43t43-17h416q26 0 43 17t17 43v76q0 6-4 10t-10 4q-6 0-10-4t-4-10v-76q0-12-10-22t-22-10H272q-12 0-22 10t-10 22v76q0 6-4 10t-10 4q-6 0-10-4t-4-10Z"/>
    </Icon>
  );
});

IconMaterialPublishW100.displayName = 'OnesyIconMaterialPublishW100';

export default IconMaterialPublishW100;
