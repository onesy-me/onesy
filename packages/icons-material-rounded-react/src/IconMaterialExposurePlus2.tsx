import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialExposurePlus2 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ExposurePlus2'

      short_name='ExposurePlus2'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M800-200H513q-12 0-20.5-8.5T484-229v-43q0-3 8-21l192-195q33-35 46.5-58.5T744-600q0-29-22.5-52.5T654-676q-26 0-44.5 10.5T578-638q-10 14-25.5 19t-30.5-1q-17-7-24.5-22.5t.5-29.5q21-35 60.5-61.5T656-760q83 0 129.5 47.5T832-600q0 45-21 82t-65 82L600-284l2 4h198q17 0 28.5 11.5T840-240q0 17-11.5 28.5T800-200ZM240-400h-80q-17 0-28.5-11.5T120-440q0-17 11.5-28.5T160-480h80v-80q0-17 11.5-28.5T280-600q17 0 28.5 11.5T320-560v80h80q17 0 28.5 11.5T440-440q0 17-11.5 28.5T400-400h-80v80q0 17-11.5 28.5T280-280q-17 0-28.5-11.5T240-320v-80Z"/>
    </Icon>
  );
});

IconMaterialExposurePlus2.displayName = 'OnesyIconMaterialExposurePlus2';

export default IconMaterialExposurePlus2;
