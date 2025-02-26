import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLocalHospitalW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocalHospitalW100'

      short_name='LocalHospital'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M459-306h42v-153h153v-42H501v-153h-42v153H306v42h153v153ZM172-172v-616h616v616H172Zm28-28h560v-560H200v560Zm0 0v-560 560Z"/>
    </Icon>
  );
});

IconMaterialLocalHospitalW100.displayName = 'OnesyIconMaterialLocalHospitalW100';

export default IconMaterialLocalHospitalW100;
