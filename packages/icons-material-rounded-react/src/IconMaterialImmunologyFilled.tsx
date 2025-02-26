import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialImmunologyFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ImmunologyFilled'

      short_name='Immunology'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M521-80q-60 0-150-16.5T227-154q-30-23-63-72t-60.5-107Q76-391 58-449t-18-99q0-85 58-138.5T222-783q60-39 133-68t151-29q78 0 141.5 30T774-777q15 10 39 30t47.5 50q23.5 30 41 70.5T920-534q2 74-30.5 154.5t-88 147Q746-166 673-123T521-80ZM414-240q54 0 89-38t35-86q0-22-9-43.5T500-447q-22-20-36-44t-21-53q-10-44-43.5-70T324-640q-49 0-86.5 37.5T200-516q0 39 16.5 87t45.5 90q29 42 68 70.5t84 28.5Zm0-80q-27 0-51-22.5T320.5-396Q302-427 291-460.5T280-516q0-17 13.5-30.5T324-560q12 0 24.5 8.5T366-526q11 42 29.5 75.5T446-388q6 5 9 12t3 14q0 16-12 29t-32 13Zm236-120q17 0 28.5-11.5T690-480v-10l10 5q15 8 30.5 3.5T754-500q9-14 5-30.5T740-555l-10-5 10-5q15-8 18.5-24t-4.5-31q-8-14-23.5-18t-30.5 4l-10 5v-11q0-17-11.5-28.5T650-680q-17 0-28.5 11.5T610-640v11l-9-5q-14-8-30-3.5T546-619q-8 14-4.5 31t19.5 24l9 4-9 6q-14 9-18.5 24.5T546-500q8 15 24.5 19t30.5-4l9-5v10q0 17 11.5 28.5T650-440Z"/>
    </Icon>
  );
});

IconMaterialImmunologyFilled.displayName = 'OnesyIconMaterialImmunologyFilled';

export default IconMaterialImmunologyFilled;
