import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPhishingW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhishingW100Filled'

      short_name='Phishing'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M444-172q-81 0-136.5-58.5T252-371v-166l125 129-19 19-78-82v100q0 70 47.5 120.5T444-200q69 0 116.5-50.5T608-371v-135q-31-5-51-29.5T537-592q0-32 19.5-57t51.5-30v-149h28v149q32 5 52 30t20 57q0 32-20 56.5T636-506v135q0 82-55.5 140.5T444-172Z"/>
    </Icon>
  );
});

IconMaterialPhishingW100Filled.displayName = 'OnesyIconMaterialPhishingW100Filled';

export default IconMaterialPhishingW100Filled;
