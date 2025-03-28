import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLocalDining = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocalDining'

      short_name='LocalDining'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M479-422 203-148q-11 11-27.5 11.5T147-148q-11-11-11-28t11-28l382-382q-18-42-5-95t57-95q53-53 118-62t106 32q41 41 32 106t-62 118q-42 44-95 57t-95-5l-50 50 276 276q11 11 11.5 27.5T811-148q-11 11-28 11t-28-11L479-422Zm-186-40L173-582q-42-42-53-106t25-114q11-15 29.5-17t31.5 12l215 217-128 128Z"/>
    </Icon>
  );
});

IconMaterialLocalDining.displayName = 'OnesyIconMaterialLocalDining';

export default IconMaterialLocalDining;
