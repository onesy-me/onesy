import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTaxiAlertFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TaxiAlertFilled'

      short_name='TaxiAlert'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M680-640q8 0 14-6t6-14v-120q0-8-6-14t-14-6q-8 0-14 6t-6 14v120q0 8 6 14t14 6Zm0 80q8 0 14-6t6-14q0-8-6-14t-14-6q-8 0-14 6t-6 14q0 8 6 14t14 6Zm-60 280q25 0 42.5-17.5T680-340q0-25-17.5-42.5T620-400q-25 0-42.5 17.5T560-340q0 25 17.5 42.5T620-280Zm-360 0q25 0 42.5-17.5T320-340q0-25-17.5-42.5T260-400q-25 0-42.5 17.5T200-340q0 25 17.5 42.5T260-280Zm420-200q-83 0-141.5-58.5T480-680q0-82 58-141t142-59q83 0 141.5 58.5T880-680q0 83-58.5 141.5T680-480ZM140-80q-25 0-42.5-17.5T80-140v-286q0-7 1-14t3-13l80-227q6-18 21.5-29t34.5-11h100v-40q0-17 11.5-28.5T360-800h21q17 0 26 14t4 30q-5 20-8 39.5t-3 39.5q0 15-10 26t-25 11H234l-42 120h239q9 0 17.5 4t14.5 12q40 49 96.5 76.5T680-400q19 0 37-2.5t36-7.5q17-5 32 5.5t15 27.5v237q0 25-17.5 42.5T740-80q-25 0-42.5-17.5T680-140v-20H200v20q0 25-17.5 42.5T140-80Z"/>
    </Icon>
  );
});

IconMaterialTaxiAlertFilled.displayName = 'OnesyIconMaterialTaxiAlertFilled';

export default IconMaterialTaxiAlertFilled;
