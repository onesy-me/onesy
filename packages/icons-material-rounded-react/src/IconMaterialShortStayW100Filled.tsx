import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialShortStayW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShortStayW100Filled'

      short_name='ShortStay'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M694-285.59V-380q0-5.6-4.2-9.8-4.2-4.2-9.8-4.2-5.6 0-9.8 4.2-4.2 4.2-4.2 9.8v99q0 1 4 11l67 67q4.36 4 10.18 4 5.82 0 9.82-4t4-9.82q0-5.82-4-10.18l-63-62.59ZM392-600q-23 0-38.5-15.5T338-654q0-23 15.5-38.5T392-708q23 0 38.5 15.5T446-654q0 23-15.5 38.5T392-600Zm288.15 494Q608-106 557-156.85t-51-123Q506-352 556.85-403t123-51Q752-454 803-403.15t51 123Q854-208 803.15-157t-123 51Zm-435.73-26q-25.42 0-42.92-17.63Q184-167.25 184-192v-576q0-24.75 17.63-42.38Q219.25-828 244-828h296q24.75 0 42.38 17.62Q600-792.75 600-768v205q0 9.85-5.5 17.42Q589-538 580-535q-2.2.67-4.16 1.42-1.96.75-3.84 1.58v-236q0-14-9-23t-23-9H244q-14 0-23 9t-9 23v295q15-17 35.5-26t44.5-9h230v4q-45 32-73 75t-38 95h-5v-66q0-5.95-4.04-9.98-4.03-4.02-10-4.02-5.96 0-9.96 4.02-4 4.03-4 9.98v66h-66q-5.95 0-9.98 4.04-4.02 4.03-4.02 10 0 5.96 4.02 9.96 4.03 4 9.98 4h66v66q0 5.95 4.02 9.98Q386.05-226 392-226q6 0 10-4t4-10v-40q0 29 6.5 57.5T431-168q6 13-1 24.5T410-132H244.42Z"/>
    </Icon>
  );
});

IconMaterialShortStayW100Filled.displayName = 'OnesyIconMaterialShortStayW100Filled';

export default IconMaterialShortStayW100Filled;
