import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMedicalInformationW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MedicalInformationW100Filled'

      short_name='MedicalInformation'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M316-266h28v-80h80v-28h-80v-80h-28v80h-80v28h80v80Zm204-124h214v-28H520v28Zm0 88h134v-28H520v28ZM132-132v-496h280v-200h136v200h280v496H132Zm308-428h80v-240h-80v240Z"/>
    </Icon>
  );
});

IconMaterialMedicalInformationW100Filled.displayName = 'OnesyIconMaterialMedicalInformationW100Filled';

export default IconMaterialMedicalInformationW100Filled;
