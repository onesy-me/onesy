import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMedicalInformation = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MedicalInformation'

      short_name='MedicalInformation'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><path d="M15,9c0,1.1-0.9,2-2,2h-2c-1.1,0-2-0.9-2-2H4v11h16V9H15z M11,16H9v2H7v-2H5v-2h2v-2h2v2h2V16z M17,17.5h-4 V16h4V17.5z M19,14.5h-6V13h6V14.5z" opacity=".3"/><path d="M20,7h-5V4c0-1.1-0.9-2-2-2h-2C9.9,2,9,2.9,9,4v3H4C2.9,7,2,7.9,2,9v11c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V9 C22,7.9,21.1,7,20,7z M11,4h2v5h-2V4z M20,20H4V9h5c0,1.1,0.9,2,2,2h2c1.1,0,2-0.9,2-2h5V20z M11,16H9v2H7v-2H5v-2h2v-2h2v2h2V16z M13,14.5V13h6v1.5H13z M13,17.5V16h4v1.5H13z"/></g>
    </Icon>
  );
});

IconMaterialMedicalInformation.displayName = 'OnesyIconMaterialMedicalInformation';

export default IconMaterialMedicalInformation;
