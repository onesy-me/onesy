import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCallQualityW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CallQualityW100Filled'

      short_name='CallQuality'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M705-132q-94 0-195.5-49.5T319.5-320q-88.5-89-138-190T132-705q0-18.43 12-30.71Q156-748 174-748h80q17 0 29.5 10.5T301-710l18 82q3 17-1 30t-14 21l-85 77q26 47 56.5 86.5T340-339q36 36 78 67t93 59l83-85q10-11 21.5-14t26.5-1l68 14q17 4 27.5 17t10.5 30v78q0 18-12.29 30-12.28 12-30.71 12Zm-50.85-348Q582-480 531-530.85t-51-123Q480-726 530.85-777t123-51Q726-828 777-777.15t51 123Q828-582 777.15-531t-123 51Zm-.15-60q5.6 0 9.8-4.2 4.2-4.2 4.2-9.8v-110q0-5.6-4.2-9.8-4.2-4.2-9.8-4.2-5.6 0-9.8 4.2-4.2 4.2-4.2 9.8v110q0 5.6 4.2 9.8 4.2 4.2 9.8 4.2Zm0-184q8 0 14-6t6-14q0-8-6-14t-14-6q-8 0-14 6t-6 14q0 8 6 14t14 6Z"/>
    </Icon>
  );
});

IconMaterialCallQualityW100Filled.displayName = 'OnesyIconMaterialCallQualityW100Filled';

export default IconMaterialCallQualityW100Filled;
