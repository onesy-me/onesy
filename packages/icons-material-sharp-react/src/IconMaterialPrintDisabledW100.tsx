import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPrintDisabledW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PrintDisabledW100'

      short_name='PrintDisabled'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M794-126 668-252v80H292v-160H162v-276h150L126-794l20-20 668 668-20 20Zm-474-74h320v-80L532-388H320v188Zm420-132-28-28h58v-220H492l-28-28h334v276h-58Zm-550-28h102.11v-56H504L340-580H190v220Zm450-248v-120H344l-28-28h352v148h-28Zm60 128q17 0 28.5-11.5T740-520q0-17-11.5-28.5T700-560q-17 0-28.5 11.5T660-520q0 17 11.5 28.5T700-480ZM190-580h150-150Zm580 0H492h278Z"/>
    </Icon>
  );
});

IconMaterialPrintDisabledW100.displayName = 'OnesyIconMaterialPrintDisabledW100';

export default IconMaterialPrintDisabledW100;
