import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialUnpublishedW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='UnpublishedW100Filled'

      short_name='Unpublished'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-132q-72 0-135.5-27.5T234-234q-47-47-74.5-110.5T132-480q0-65 22-122t61-103L100-820q-4-4-4.5-9.5T100-840q5-5 10-5t10 5L862-98q4 4 4.5 9.5T862-78q-5 5-10 5t-10-5L705-215q-46 39-103 61t-122 22Zm180-458q-5-5-10-5t-10 5l-79 79-229-229q-14-14-10.5-33t20.5-27q32-14 66.5-21t71.5-7q72 0 135.5 27.5T726-726q47 47 74.5 110.5T828-480q0 37-7 71.5T800-342q-8 17-27 20.5T740-332L581-491l79-79q4-4 4.5-9.5T660-590ZM298-456l103 103q9 9 21 9t21-9l62-62-20-20-63 63-104-104q-4-4-9.5-4.5T298-476q-5 5-5 10t5 10Z"/>
    </Icon>
  );
});

IconMaterialUnpublishedW100Filled.displayName = 'OnesyIconMaterialUnpublishedW100Filled';

export default IconMaterialUnpublishedW100Filled;
