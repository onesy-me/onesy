import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTimerOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TimerOff'

      short_name='TimerOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-800q60 0 117.5 20T706-722l28-28q11-11 28-11t28 11q11 11 11 28t-11 28l-28 28q38 51 58 108.5T840-440q0 26-4 51.5T824-337q-7 22-22.5 29t-29.5 2q-14-5-23.5-18t-3.5-30q8-22 11.5-43.5T760-440q0-116-82-198t-198-82q-20 0-43 3.5T391-705q-17 5-29-4t-17-23q-5-14 1.5-29.5T373-784q26-8 53-12t54-4Zm40 248v-48q0-17-11.5-28.5T480-640q-10 0-18.5 4T448-624l72 72ZM480-80q-74 0-139.5-28.5T226-186q-49-49-77.5-114.5T120-440q0-60 18.5-115.5T192-656L84-764q-11-11-11-28t11-28q11-11 28-11t28 11l680 680q11 11 11 28t-11 28q-11 11-28 11t-28-11l-68-68q-48 35-103.5 53.5T480-80Zm0-80q42 0 82-13t75-37L248-599q-24 35-36 75t-12 84q0 116 82 198t198 82Zm-80-680q-17 0-28.5-11.5T360-880q0-17 11.5-28.5T400-920h160q17 0 28.5 11.5T600-880q0 17-11.5 28.5T560-840H400Zm43 435Zm113-112Z"/>
    </Icon>
  );
});

IconMaterialTimerOff.displayName = 'OnesyIconMaterialTimerOff';

export default IconMaterialTimerOff;
