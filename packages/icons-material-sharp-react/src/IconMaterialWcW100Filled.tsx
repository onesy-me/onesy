import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWcW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WcW100Filled'

      short_name='Wc'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M254-106v-274h-60v-274h212v274h-60v274h-92Zm46-590q-27 0-45.5-18.5T236-760q0-27 18.5-45.5T300-824q27 0 45.5 18.5T364-760q0 27-18.5 45.5T300-696Zm326 590v-214h-90l84-334h80l84 334h-90v214h-68Zm34-590q-27 0-45.5-18.5T596-760q0-27 18.5-45.5T660-824q27 0 45.5 18.5T724-760q0 27-18.5 45.5T660-696Z"/>
    </Icon>
  );
});

IconMaterialWcW100Filled.displayName = 'OnesyIconMaterialWcW100Filled';

export default IconMaterialWcW100Filled;
