import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMedicalInformationW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MedicalInformationW100'

      short_name='MedicalInformation'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M316-266h28v-80h80v-28h-80v-80h-28v80h-80v28h80v80Zm204-124h214v-28H520v28Zm0 88h134v-28H520v28ZM132-132v-496h280v-200h136v200h280v496H132Zm28-28h640v-440H548v68H412v-68H160v440Zm280-400h80v-240h-80v240Zm40 180Z"/>
    </Icon>
  );
});

IconMaterialMedicalInformationW100.displayName = 'OnesyIconMaterialMedicalInformationW100';

export default IconMaterialMedicalInformationW100;
