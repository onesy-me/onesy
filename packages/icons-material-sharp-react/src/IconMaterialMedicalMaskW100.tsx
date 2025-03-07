import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMedicalMaskW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MedicalMaskW100'

      short_name='MedicalMask'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M479.88-254q-67.88 0-134.38-5.5T212-273v-78.07q-45-10.93-73-46.92-28-35.98-28-82.01 0-45.51 28-81.76Q167-598 212-609v-100q67 8 133.62 13.5t134.5 5.5q67.88 0 134.38-6T748-709v100q45 11 73 46.82T849-480q0 46.36-28 82.18-28 35.82-73 46.65V-273q-67 7-133.62 13t-134.5 6Zm.12-26q60 0 120-5t120-13v-382q-60 8-120 13t-120 5q-60 0-120-5t-120-13v382q60 8 120 13t120 5Zm-.17-87q43.17 0 85.17-6t84-17v-28q-42 11-84.05 17-42.06 6-85 6-42.95 0-84.95-6t-84-17v29q42 11 83.83 16.5 41.82 5.5 85 5.5ZM212-380v-200q-32 11-52.5 38.5T139-480q0 33.76 20.5 61.38Q180-391 212-380Zm536 0q32-11 52.5-38.62Q821-446.24 821-480q0-35-20.5-62T748-580v200ZM479.83-526q43.17 0 85.17-6t84-17v-28q-42 11-84.05 17-42.06 6-85 6-42.95 0-84.95-6t-84-17v29q42 11 83.83 16.5 41.82 5.5 85 5.5ZM240-298v-382 382Z"/>
    </Icon>
  );
});

IconMaterialMedicalMaskW100.displayName = 'OnesyIconMaterialMedicalMaskW100';

export default IconMaterialMedicalMaskW100;
