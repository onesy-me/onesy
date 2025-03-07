import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPhishingW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhishingW100'

      short_name='Phishing'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M444-172q-81 0-136.5-58.5T252-371v-166l125 129-19 19-78-82v100q0 70 47.5 120.5T444-200q69 0 116.5-50.5T608-371v-137q-31-5-51.5-28.5T536-592q0-32 20-56t52-29v-151h28v151q32 5 52 29t20 56q0 32-20 55.5T636-508v137q0 82-55.5 140.5T444-172Zm178-362q24 0 41-17t17-41q0-24-17-41t-41-17q-24 0-41 17t-17 41q0 24 17 41t41 17Zm0-58Z"/>
    </Icon>
  );
});

IconMaterialPhishingW100.displayName = 'OnesyIconMaterialPhishingW100';

export default IconMaterialPhishingW100;
