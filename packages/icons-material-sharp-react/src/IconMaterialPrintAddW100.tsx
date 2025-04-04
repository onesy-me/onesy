import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPrintAddW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PrintAddW100'

      short_name='PrintAdd'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M190-580h580-580Zm101.65 408v-160H162v-276h636v101l-14-2q-7-1-14-1v-70H190v220h102v-56h286q-5 7-9.5 13.5T560-388H320v188h223q2 8 5.5 14.5T555-172H291.65ZM640-608v-120H320v120h-28v-148h376v148h-28Zm111 467v-120H631v-28h120v-120h28v120h120v28H779v120h-28Z"/>
    </Icon>
  );
});

IconMaterialPrintAddW100.displayName = 'OnesyIconMaterialPrintAddW100';

export default IconMaterialPrintAddW100;
