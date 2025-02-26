import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTenancy = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Tenancy'

      short_name='Tenancy'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-120q-50 0-85-35t-35-85q0-50 35-85t85-35q9 0 17.5 1.5T194-355l162-223q-17-21-26.5-47t-9.5-55q0-66 47-113t113-47q66 0 113 47t47 113q0 29-10 55t-27 47l163 223q8-2 16.5-3.5T800-360q50 0 85 35t35 85q0 50-35 85t-85 35q-50 0-85-35t-35-85q0-19 5.5-36.5T701-308L539-531q-5 2-9.5 3t-9.5 3v172q35 12 57.5 43t22.5 70q0 50-35 85t-85 35q-50 0-85-35t-35-85q0-39 22.5-69.5T440-353v-172q-5-2-9.5-3t-9.5-3L259-308q10 14 15.5 31.5T280-240q0 50-35 85t-85 35Zm0-80q17 0 28.5-11.5T200-240q0-17-11.5-28.5T160-280q-17 0-28.5 11.5T120-240q0 17 11.5 28.5T160-200Zm320-480Zm0 480q17 0 28.5-11.5T520-240q0-17-11.5-28.5T480-280q-17 0-28.5 11.5T440-240q0 17 11.5 28.5T480-200Zm320 0q17 0 28.5-11.5T840-240q0-17-11.5-28.5T800-280q-17 0-28.5 11.5T760-240q0 17 11.5 28.5T800-200Zm-640-40Zm320 0Zm320 0ZM480-600q33 0 56.5-23.5T560-680q0-33-23.5-56.5T480-760q-33 0-56.5 23.5T400-680q0 33 23.5 56.5T480-600Z"/>
    </Icon>
  );
});

IconMaterialTenancy.displayName = 'OnesyIconMaterialTenancy';

export default IconMaterialTenancy;
