import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCallLogW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CallLogW100Filled'

      short_name='CallLog'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M705-132q-94 0-195.5-49.5T319.5-320q-88.5-89-138-190T132-705q0-18.43 12-30.71Q156-748 174-748h80q17 0 29.5 10.5T301-710l18 82q3 17-1 30t-14 21l-85 77q26 47 56.5 86.5T340-339q36 36 78 67t93 59l83-85q10-11 21.5-14t26.5-1l68 14q17 4 27.5 17t10.5 30v78q0 18-12.29 30-12.28 12-30.71 12ZM494-800q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h320q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H494Zm0 128q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h320q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H494Zm0 128q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h320q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H494Z"/>
    </Icon>
  );
});

IconMaterialCallLogW100Filled.displayName = 'OnesyIconMaterialCallLogW100Filled';

export default IconMaterialCallLogW100Filled;
