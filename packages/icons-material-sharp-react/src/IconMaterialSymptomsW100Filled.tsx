import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSymptomsW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SymptomsW100Filled'

      short_name='Symptoms'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M722.34-170Q677-170 646-201.5t-31-76.39q0-22.11 9-42.11t26-36l72-68 72 67.85q16 15.15 25.5 35.65T829-278q-1 45-31.5 76.5T722.34-170ZM480-392q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm-.41 140q-125.04 0-227.81-67.5Q149-387 96-500q53-113 155.86-180.5 102.85-67.5 228-67.5Q605-748 708-680.5 811-613 864-500q-6 12.86-12.5 24.86T837-452L719-561 608-454q4-11 6-22.38 2-11.37 2-23.62 0-56.67-39.74-96.33Q536.53-636 479.76-636q-56.76 0-96.26 39.74-39.5 39.73-39.5 96.5 0 56.76 39.67 96.26Q423.33-364 480-364q16.74 0 32.37-3.5Q528-371 542-379q-17 29-24.5 61.5t-1.5 64.53q-9 .97-17.99.97h-18.42Z"/>
    </Icon>
  );
});

IconMaterialSymptomsW100Filled.displayName = 'OnesyIconMaterialSymptomsW100Filled';

export default IconMaterialSymptomsW100Filled;
