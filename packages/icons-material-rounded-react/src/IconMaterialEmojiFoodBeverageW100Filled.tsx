import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEmojiFoodBeverageW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EmojiFoodBeverageW100Filled'

      short_name='EmojiFoodBeverage'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M226-172q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h508q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H226Zm458-442h80q15 0 25.5-9.5T800-647v-80q0-14-10.5-23.5T764-760h-80v146ZM327-320q-48 0-81.5-32T212-430v-324q0-14.13 9.93-24.07Q231.87-788 246-788h120v84l-58 48q-2 2-8 16v106q0 8 6 14t14 6h120q8 0 14-6t6-14v-106q0-2-8-16l-58-48v-84h370q26.4 0 45.2 17.5Q828-753 828-727v80q0 26-18.8 43.5T764-586h-80v156q0 46-33.5 78T569-320H327Z"/>
    </Icon>
  );
});

IconMaterialEmojiFoodBeverageW100Filled.displayName = 'OnesyIconMaterialEmojiFoodBeverageW100Filled';

export default IconMaterialEmojiFoodBeverageW100Filled;
