import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAutoTransmissionW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AutoTransmissionW100Filled'

      short_name='AutoTransmission'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M173.12-172q-39.12 0-66.62-27.42Q79-226.83 79-266q0-35 23-61.5t57-31.5v-242q-34-5-57-31.5T79-694q0-39.17 27.38-66.58Q133.76-788 172.88-788q39.12 0 66.62 27.42Q267-733.17 267-694q0 35-23 61.5T187-601v107h279v-107q-34-5-57-31.5T386-694q0-39.17 27.38-66.58Q440.76-788 479.88-788q39.12 0 66.62 27.42Q574-733.17 574-694q0 35-23 61.5T494-601v107h214q27 0 46.5-19.5T774-560v-41q-34-5-57-31.5T694-694q0-39.17 27.38-66.58Q748.76-788 787.88-788q39.12 0 66.62 27.42Q882-733.17 882-694q0 35-23 61.5T802-601v41q0 39.17-27.42 66.58Q747.17-466 708-466H494v107q34 5 57 31.5t23 61.5q0 39.17-27.38 66.58Q519.24-172 480.12-172q-39.12 0-66.62-27.42Q386-226.83 386-266q0-35 23-61.5t57-31.5v-107H187v107q34 5 57 31.5t23 61.5q0 39.17-27.38 66.58Q212.24-172 173.12-172Z"/>
    </Icon>
  );
});

IconMaterialAutoTransmissionW100Filled.displayName = 'OnesyIconMaterialAutoTransmissionW100Filled';

export default IconMaterialAutoTransmissionW100Filled;
