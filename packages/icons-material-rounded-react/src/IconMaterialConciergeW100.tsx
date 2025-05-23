import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialConciergeW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ConciergeW100'

      short_name='Concierge'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M466-132q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h388q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H466Zm26-88q0-66 44.5-114T646-387v-14q0-5 4.03-9.5 4.02-4.5 9.97-4.5 5 0 9.5 4.5t4.5 9.5v14q65 5 109.5 53T828-220H492Zm31-28h273q-10-49-47.5-81T660-361q-51 0-89 32t-48 81Zm137 0ZM94-526v-232q0-13 8.5-21.5T124-788h76q13 0 21.5 8.5T230-758v20l294-87q8-2 17.5-2.5T559-825l240 75q5.11 1.68 8.05 6.11Q810-739.47 810-734q0 32-26 53t-60 21H616v18q0 20-13 35t-33 23l-230 84q-5 2-10.5 3t-10.5 1H124q-13 0-21.5-8.5T94-526Zm28-116v118h80v-236h-80v118Zm108 26v92h96l242-89q9.17-3.2 14.58-10.8Q588-631.4 588-641v-19h-79l-104 35q-5 2-10.5-1t-7.5-8q-2-6 .57-11.52 2.56-5.51 8.43-7.48l110-35h218q15 0 33.5-9t22.5-29l-240-74-310 92v92Z"/>
    </Icon>
  );
});

IconMaterialConciergeW100.displayName = 'OnesyIconMaterialConciergeW100';

export default IconMaterialConciergeW100;
