import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRequestQuoteW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RequestQuoteW100Filled'

      short_name='RequestQuote'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M484-279v27q0 5.2 3.9 9.1 3.9 3.9 9.1 3.9 6 0 10.5-4.5T512-254v-25h66q5.95 0 9.97-4.02Q592-287.05 592-293v-120q0-5.95-4.03-9.98Q583.95-427 578-427H432v-92h146q5.95 0 9.97-4.04 4.03-4.03 4.03-10 0-5.96-4.03-9.96-4.02-4-9.97-4h-66v-27q0-5.2-3.9-9.1-3.9-3.9-9.1-3.9-6 0-10.5 4.5T484-572v25h-66q-5.95 0-9.98 4.03Q404-538.95 404-533v120q0 5.95 4.02 9.98Q412.05-399 418-399h146v92H418q-5.95 0-9.98 4.04-4.02 4.03-4.02 10 0 5.96 4.02 9.96 4.03 4 9.98 4h66ZM272-132q-26 0-43-17t-17-43v-576q0-26 17-43t43-17h314l162 162v474q0 26-17 43t-43 17H272Zm300-668v118q0 12.75 8.63 21.37Q589.25-652 602-652h118L572-800Z"/>
    </Icon>
  );
});

IconMaterialRequestQuoteW100Filled.displayName = 'OnesyIconMaterialRequestQuoteW100Filled';

export default IconMaterialRequestQuoteW100Filled;
