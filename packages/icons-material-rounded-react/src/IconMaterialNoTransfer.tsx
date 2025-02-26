import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNoTransfer = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoTransfer'

      short_name='NoTransfer'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M320-200v20q0 25-17.5 42.5T260-120q-25 0-42.5-17.5T200-180v-62q-18-20-29-44.5T160-340v-347l-76-76q-12-12-12-28.5T84-820q12-12 28.5-12t28.5 12l679 680q12 12 12 28t-12 28q-12 12-28.5 12T763-84L652-195h114v12q0 26-18.5 44.5T703-120q-26 0-44.5-18.5T640-183v-17H320Zm0-80h247L367-480H240v120q0 33 23.5 56.5T320-280Zm160-600q172 0 246 37t74 123v400q0 17-11.5 28.5T760-280q-17 0-28.5-11.5T720-320v-160H562q-20 0-30-12.5T522-520q0-15 10-27.5t30-12.5h158v-120H400q-20 0-30-12.5T360-720q0-15 10-27.5t30-12.5h306q-15-17-64.5-28.5T482-800q-61 0-102 3.5T312-786q-17 5-28.5-5T268-815q-4-14 3.5-29.5T300-865q35-9 80-12t100-3ZM340-320q25 0 42.5-17.5T400-380q0-25-17.5-42.5T340-440q-25 0-42.5 17.5T280-380q0 25 17.5 42.5T340-320ZM240-560h47l-47-47v47Zm75-200h391-391Zm52 280Zm228 0Z"/>
    </Icon>
  );
});

IconMaterialNoTransfer.displayName = 'OnesyIconMaterialNoTransfer';

export default IconMaterialNoTransfer;
