import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEmojiFoodBeverageW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EmojiFoodBeverageW100'

      short_name='EmojiFoodBeverage'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M226-172q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h508q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H226Zm101-148q-48 0-81.5-32T212-430v-324q0-14.13 9.93-24.07Q231.87-788 246-788h518q26.4 0 45.2 17.5Q828-753 828-727v80q0 26-18.8 43.5T764-586h-80v156q0 46-33.5 78T569-320H327Zm0-440h329-416 87Zm357 146h80q15 0 25.5-9.5T800-647v-80q0-14-10.5-23.5T764-760h-80v146ZM569-348q35.89 0 61.44-24.21Q656-396.41 656-430.4V-760H394v56l58 48q2 2 8 16v106q0 8-6 14t-14 6H320q-8 0-14-6t-6-14v-106q0-2 8-16l58-48v-56H240v329.6q0 33.99 25.56 58.19Q291.11-348 327-348h242ZM366-760h28-28Z"/>
    </Icon>
  );
});

IconMaterialEmojiFoodBeverageW100.displayName = 'OnesyIconMaterialEmojiFoodBeverageW100';

export default IconMaterialEmojiFoodBeverageW100;
