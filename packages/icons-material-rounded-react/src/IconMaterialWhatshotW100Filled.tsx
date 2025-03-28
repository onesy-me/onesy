import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWhatshotW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WhatshotW100Filled'

      short_name='Whatshot'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-132q-95 0-173.5-46.5T182-301l138-139 99 82q9 8 20.44 7.31 11.44-.69 19.56-8.31l198-198v128q0 5.95 4.04 9.98 4.03 4.02 10 4.02 5.96 0 9.96-4.02 4-4.03 4-9.98v-146q0-12.75-8.62-21.38Q667.75-605 655-605H509q-5.95 0-9.98 4.04-4.02 4.03-4.02 10 0 5.96 4.02 9.96 4.03 4 9.98 4h126L440-380l-99-83q-8.93-8-20.47-7-11.53 1-19.88 9.29L167-328q-17-35-26-73.25T132-480q0-72.21 27.39-135.72 27.39-63.51 74.35-110.49 46.96-46.98 110.43-74.38Q407.65-828 479.83-828q72.17 0 135.73 27.39 63.56 27.39 110.57 74.35 47.02 46.96 74.44 110.43Q828-552.35 828-480.17q0 72.17-27.41 135.73-27.4 63.56-74.38 110.57-46.98 47.02-110.49 74.44Q552.21-132 480-132Z"/>
    </Icon>
  );
});

IconMaterialWhatshotW100Filled.displayName = 'OnesyIconMaterialWhatshotW100Filled';

export default IconMaterialWhatshotW100Filled;
