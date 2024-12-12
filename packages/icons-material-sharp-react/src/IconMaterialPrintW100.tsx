import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPrintW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PrintW100'

      short_name='Print'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M640-608v-120H320v120h-28v-148h376v148h-28Zm-450 28h580-580Zm510 100q17 0 28.5-11.5T740-520q0-17-11.5-28.5T700-560q-17 0-28.5 11.5T660-520q0 17 11.5 28.5T700-480Zm-60 280v-188H320v188h320Zm28 28H292v-160H162v-276h636v276H668v160Zm102-188v-220H190v220h102v-56h376v56h102Z"/>
    </Icon>
  );
});

IconMaterialPrintW100.displayName = 'OnesyIconMaterialPrintW100';

export default IconMaterialPrintW100;
