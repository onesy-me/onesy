import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPhishingFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhishingFilled'

      short_name='Phishing'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440-120q-100 0-170-70t-70-170v-192q0-14 12-19t22 5l138 138q11 11 11 27.5T372-372q-12 12-28.5 12T315-372l-35-35v47q0 66 47 113t113 47q66 0 113-47t47-113v-127q-36-14-58-44.5T520-600q0-38 22-68.5t58-44.5v-127q0-17 11.5-28.5T640-880q17 0 28.5 11.5T680-840v127q36 14 58 44.5t22 68.5q0 38-22 69t-58 44v127q0 100-70 170t-170 70Z"/>
    </Icon>
  );
});

IconMaterialPhishingFilled.displayName = 'OnesyIconMaterialPhishingFilled';

export default IconMaterialPhishingFilled;
