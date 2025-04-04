import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNoPhotographyW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoPhotographyW100Filled'

      short_name='NoPhotography'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m842-78-94-94H192q-24.75 0-42.37-17.63Q132-207.25 132-232v-416q0-24.75 17.63-42.38Q167.25-708 192-708h60v40L100-820q-4-4-4.5-9.5T100-840q5-5 10-5t10 5L862-98q4 4 4.5 9.5T862-78q-5 5-10 5t-10-5Zm-33-211q-8 3-16.5 2t-15.5-8L619-453q-2-24-12.5-46.5t-27.79-39.79Q562-556 539.5-566.5T493-579L355-717q-5-5-7-10.09T346-738q0-5 2-10.13 2-5.13 6-9.87l10-11q8.2-8.77 19.76-13.88Q395.32-788 408-788h144q12.68 0 24.24 5.12Q587.8-777.77 596-769l56 61h116q24.75 0 42.38 17.62Q828-672.75 828-648v332q0 10.5-5.5 17.25T809-289Zm-329-11q27.53 0 53.27-10.5Q559-321 579-341L381-539q-20 20-30.5 45.73Q340-467.53 340-440q0 58.33 40.83 99.17Q421.67-300 480-300Zm.5-28q-47.25 0-79.87-32.63Q368-393.25 368-440.5q0-22.5 8.5-42.5t24.5-36l158 158q-16 16-36 24.5t-42.5 8.5Z"/>
    </Icon>
  );
});

IconMaterialNoPhotographyW100Filled.displayName = 'OnesyIconMaterialNoPhotographyW100Filled';

export default IconMaterialNoPhotographyW100Filled;
