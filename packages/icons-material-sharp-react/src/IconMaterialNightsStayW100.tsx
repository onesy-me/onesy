import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNightsStayW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NightsStayW100'

      short_name='NightsStay'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M504-426Zm20 334H420l5.04-4.32q5.04-4.32 10.96-9.68 5.92-5.36 10.96-9.68L452-120h72q88 0 163-44t118-121q-86-8.06-163-43.81T504-426q-60-61-96.5-138T364-726q-77 43-120.5 118.5T200-444q0 15 1.5 31.5T206-382l-4 1q-4 1-9.5 2.5t-9.5 3l-4 1.5q-3-17-5-34.5t-2-35.5q0-108 59.5-196.5T391-769q0 92 34 176t99 149q65 65 149 99t176 34q-40 100-128.5 159.5T524-92Zm-284-28h180q25 0 42.5-17.5T480-180q0-25-17-42.5T422-240h-52l-20-48q-14-33-44-52.5T240-360q-50 0-85 34.5T120-240q0 50 35 85t85 35Zm0 28q-62-2-105-44.5T92-240.3q0-61.29 43-104.5Q178-388 240.1-388q44.9 0 81.52 24.37Q358.24-339.25 376-298l13 30h32q36 0 61.5 25.83t25.5 62.18q0 36.99-25.5 62.49T420-92H240Z"/>
    </Icon>
  );
});

IconMaterialNightsStayW100.displayName = 'OnesyIconMaterialNightsStayW100';

export default IconMaterialNightsStayW100;
