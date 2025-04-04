import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBreastfeedingW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BreastfeedingW100Filled'

      short_name='Breastfeeding'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M478-160q-33.77 0-65.53-7.1-31.76-7.09-57.49-18.13Q318-201 295-223.86q-23-22.87-23-50.95v-185.32q0-24.87 18.68-45.78 18.69-20.92 48.11-37Q369-559 406-567.5q37-8.5 74-8.5t74 8.5q37 8.5 67.21 24.56 30.22 16.07 48.5 36.95Q688-485.1 688-460.2v185.55q0 13.65-5.93 26.45-5.93 12.8-17 24T638.5-203Q623-193 605-185q1-4.02 3-22.5 0-46.61-32.93-79.55Q542.15-320 496-320q-34.72 0-61.36 18T395-255q25 8 46.39 10 21.38 2 37.52 2 13.72 0 22.2-1 8.47-1 10.89-1v83q-9 2-17.5 2H478Zm97.72-176Q602-336 621-354.72q19-18.71 19-45Q640-426 621.08-445q-18.93-19-45.5-19-26.58 0-45.08 18.92-18.5 18.93-18.5 45.5 0 26.58 18.72 45.08 18.71 18.5 45 18.5ZM480-608q40 0 68-28t28-68.4q0-39.6-28.04-67.6-28.04-28-68.1-28-40.86 0-68.36 28T384-704q0 40 27.6 68t68.4 28Z"/>
    </Icon>
  );
});

IconMaterialBreastfeedingW100Filled.displayName = 'OnesyIconMaterialBreastfeedingW100Filled';

export default IconMaterialBreastfeedingW100Filled;
