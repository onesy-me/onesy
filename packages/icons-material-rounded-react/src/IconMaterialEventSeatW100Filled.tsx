import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEventSeatW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EventSeatW100Filled'

      short_name='EventSeat'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M199.96-156q-5.96 0-9.96-4.02-4-4.03-4-9.98v-114q0-24.75 17.63-42.38Q221.25-344 246-344h468q24.75 0 42.38 17.62Q774-308.75 774-284v114q0 5.95-4.04 9.98-4.03 4.02-10 4.02-5.96 0-9.96-4.02-4-4.03-4-9.98v-114q0-14-9-23t-23-9H246q-14 0-23 9t-9 23v114q0 5.95-4.04 9.98-4.03 4.02-10 4.02Zm6.16-262Q192-418 182-427.88q-10-9.88-10-24t9.88-24.12q9.88-10 24-10t24.12 9.88q10 9.88 10 24T230.12-428q-9.88 10-24 10ZM320-424v-314q0-24.75 17.63-42.38Q355.25-798 380-798h200q24.75 0 42.38 17.62Q640-762.75 640-738v314H320Zm434.12 6Q740-418 730-427.88q-10-9.88-10-24t9.88-24.12q9.88-10 24-10t24.12 9.88q10 9.88 10 24T778.12-428q-9.88 10-24 10Z"/>
    </Icon>
  );
});

IconMaterialEventSeatW100Filled.displayName = 'OnesyIconMaterialEventSeatW100Filled';

export default IconMaterialEventSeatW100Filled;
