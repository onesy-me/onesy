import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLocalHospital = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocalHospital'

      short_name='LocalHospital'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M420-280h120v-140h140v-120H540v-140H420v140H280v120h140v140ZM120-120v-720h720v720H120Zm80-80h560v-560H200v560Zm0 0v-560 560Z"/>
    </Icon>
  );
});

IconMaterialLocalHospital.displayName = 'OnesyIconMaterialLocalHospital';

export default IconMaterialLocalHospital;
