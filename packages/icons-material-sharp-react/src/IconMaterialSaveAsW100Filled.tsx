import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSaveAsW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SaveAsW100Filled'

      short_name='SaveAs'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M532-92v-78l231-230 77 78L610-92h-78ZM280-572h278v-108H280v108Zm483 288 37-38-37-38-38 38 38 38ZM412-172H172v-616h486l130 130v65L541-348q5-8 7-16t2-18q0-29-19.5-48.5T482-450q-29 0-48.5 19.5T414-382q0 29 19.5 48.5T482-314q9 0 17.5-2t16.5-7L412-220v48Z"/>
    </Icon>
  );
});

IconMaterialSaveAsW100Filled.displayName = 'OnesyIconMaterialSaveAsW100Filled';

export default IconMaterialSaveAsW100Filled;
