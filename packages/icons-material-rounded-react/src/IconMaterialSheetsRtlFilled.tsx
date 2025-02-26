import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSheetsRtlFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SheetsRtlFilled'

      short_name='SheetsRtl'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M252-108 148-212q-12-12-12-28t12-28l104-104q12-12 28-12t28 12q12 12 11.5 28.5T308-315l-35 35h487q17 0 28.5 11.5T800-240q0 17-11.5 28.5T760-200H273l35 35q11 12 11.5 28.5T308-108q-12 12-28 12t-28-12Zm-32-332q-25 0-42.5-17.5T160-500v-360q0-25 17.5-42.5T220-920h520q25 0 42.5 17.5T800-860v360q0 25-17.5 42.5T740-440H220Zm20-280h200v-120H240v120Zm280 0h200v-120H520v120Zm-80 200v-120H240v120h200Zm80 0h200v-120H520v120Z"/>
    </Icon>
  );
});

IconMaterialSheetsRtlFilled.displayName = 'OnesyIconMaterialSheetsRtlFilled';

export default IconMaterialSheetsRtlFilled;
