import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAnalyticsW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AnalyticsW100Filled'

      short_name='Analytics'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M331.96-480q-5.96 0-9.96 4.02-4 4.03-4 9.98v146q0 5.95 4.04 9.98 4.03 4.02 10 4.02 5.96 0 9.96-4.02 4-4.03 4-9.98v-146q0-5.95-4.04-9.98-4.03-4.02-10-4.02Zm296-200q-5.96 0-9.96 4.03-4 4.02-4 9.97v346q0 5.95 4.04 9.98 4.03 4.02 10 4.02 5.96 0 9.96-4.02 4-4.03 4-9.98v-346q0-5.95-4.04-9.97-4.03-4.03-10-4.03Zm-148 280q-5.96 0-9.96 4.02-4 4.03-4 9.98v66q0 5.95 4.04 9.98 4.03 4.02 10 4.02 5.96 0 9.96-4.02 4-4.03 4-9.98v-66q0-5.95-4.04-9.98-4.03-4.02-10-4.02ZM232-172q-26 0-43-17t-17-43v-496q0-26 17-43t43-17h496q26 0 43 17t17 43v496q0 26-17 43t-43 17H232Zm248.04-334q5.96 0 9.96-4.04 4-4.03 4-10 0-5.96-4.04-9.96-4.03-4-10-4-5.96 0-9.96 4.04-4 4.03-4 10 0 5.96 4.04 9.96 4.03 4 10 4Z"/>
    </Icon>
  );
});

IconMaterialAnalyticsW100Filled.displayName = 'OnesyIconMaterialAnalyticsW100Filled';

export default IconMaterialAnalyticsW100Filled;
