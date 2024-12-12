import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialContactPageW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ContactPageW100Filled'

      short_name='ContactPage'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-424q23 0 38.5-15.5T534-478q0-23-15.5-38.5T480-532q-23 0-38.5 15.5T426-478q0 23 15.5 38.5T480-424ZM346-296h268v-1q0-17-9-28t-24-18q-23-10-48.5-15.5T480-364q-27 0-52.5 5.5T379-343q-15 7-24 18t-9 28v1Zm342 164H272q-26 0-43-17t-17-43v-576q0-26 17-43t43-17h241q12 0 23.5 5t19.5 13l174 174q8 8 13 19.5t5 23.5v401q0 26-17 43t-43 17Z"/>
    </Icon>
  );
});

IconMaterialContactPageW100Filled.displayName = 'OnesyIconMaterialContactPageW100Filled';

export default IconMaterialContactPageW100Filled;
