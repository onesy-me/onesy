import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialUploadW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='UploadW100Filled'

      short_name='Upload'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M272-212q-26 0-43-17t-17-43v-76q0-6 4-10t10-4q6 0 10 4t4 10v76q0 12 10 22t22 10h416q12 0 22-10t10-22v-76q0-6 4-10t10-4q6 0 10 4t4 10v76q0 26-17 43t-43 17H272Zm194-482-80 80q-4 4-9.5 4.5T366-614q-5-5-5-10t5-10l93-93q5-5 10-7t11-2q6 0 11 2t10 7l93 93q4 4 4.5 9.5T594-614q-5 5-10 5t-10-5l-80-80v338q0 6-4 10t-10 4q-6 0-10-4t-4-10v-338Z"/>
    </Icon>
  );
});

IconMaterialUploadW100Filled.displayName = 'OnesyIconMaterialUploadW100Filled';

export default IconMaterialUploadW100Filled;
