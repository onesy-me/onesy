import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTransferWithinAStation = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TransferWithinAStation'

      short_name='TransferWithinAStation'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m130-89 102-515-72 28v96q0 17-11.5 28.5T120-440q-17 0-28.5-11.5T80-480v-122q0-12 6.5-21.5T104-638l178-76q29-12 59-2.5t47 36.5l40 64q23 35 56.5 59.5T561-524q17 3 28 15t11 29q0 17-11.5 28t-27.5 9q-54-8-101-33.5T380-540l-24 120 72 68q6 6 9 13.5t3 15.5v243q0 17-11.5 28.5T400-40q-17 0-28.5-11.5T360-80v-200l-84-80-65 288q-3 14-14.5 23T170-40q-20 0-32-15t-8-34Zm250-651q-33 0-56.5-23.5T300-820q0-33 23.5-56.5T380-900q33 0 56.5 23.5T460-820q0 33-23.5 56.5T380-740Zm386 630H590q-13 0-21.5-8.5T560-140q0-13 8.5-21.5T590-170h176l-7-7q-9-9-9-21t9-21q9-9 21-9t21 9l51 51q12 12 12 28t-12 28l-51 51q-9 9-21 9t-21-9q-9-9-9-21t9-21l7-7Zm-92-170 7 7q9 9 9 21t-9 21q-9 9-21 9t-21-9l-51-51q-12-12-12-28t12-28l51-51q9-9 21-9t21 9q9 9 9 21t-9 21l-7 7h176q13 0 21.5 8.5T880-310q0 13-8.5 21.5T850-280H674Z"/>
    </Icon>
  );
});

IconMaterialTransferWithinAStation.displayName = 'OnesyIconMaterialTransferWithinAStation';

export default IconMaterialTransferWithinAStation;
