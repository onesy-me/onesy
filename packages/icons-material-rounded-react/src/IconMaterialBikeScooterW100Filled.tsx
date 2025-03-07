import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBikeScooterW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BikeScooterW100Filled'

      short_name='BikeScooter'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M12-226v-28h186q6-72 57-125t119-59l-62-284q-3-11-12-17.5t-18-6.5H172q-6 0-10-4t-4-10q0-6 4-10t10-4h110q18 0 35.5 12.5T340-728l68 316h-8q-72 0-123 51t-51 123v12H12Zm388 82q-39 0-66.5-27.5T306-238q0-39 27.5-66.5T400-332q39 0 66.5 27.5T494-238q0 39-27.5 66.5T400-144Zm372-124q-69 0-117.5-43.5T598-426H486l-6-28h118q3-29 22.5-71.5T678-588H452l-6-28h246l-70-192q-3-9-10-13.5t-16-4.5h-64q-6 0-10-4t-4-10q0-6 4-10t10-4h64q17 0 31.5 9.5T648-818l74 202h50q74 0 124 50t50 124q0 71-52.5 122.5T772-268Zm-64-304 35 99q2 5 7.5 7.5t10.5.5q5-2 7.5-7.5t.5-10.5l-37-99-24 10Z"/>
    </Icon>
  );
});

IconMaterialBikeScooterW100Filled.displayName = 'OnesyIconMaterialBikeScooterW100Filled';

export default IconMaterialBikeScooterW100Filled;
