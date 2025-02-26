import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNoiseControlOnW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoiseControlOnW100'

      short_name='NoiseControlOn'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M520-266q39 0 66.5-28t27.5-66h-28q0 27-18.88 46.5-18.87 19.5-46.78 19.5Q499-294 482-306.5 465-319 458-339q-5.22-14.96-12.61-29.48T427-394l-54-54q-19-19-29-42.5T334-540q0-52.92 37-89.46Q408-666 460-666q47 0 82 29.5t43 75.5h28q-8-57-51.25-95-43.24-38-101.75-38-64.17 0-109.08 44.5Q306-605 306-540.04q0 32.04 12 60.54t35 51.5l54 54q9 9 14.5 20t9.5 23q10.15 28.54 34.74 46.77Q490.33-266 520-266Zm20-160q14 0 24-9.92 10-9.91 10-24.08 0-14-10-24t-24.27-10Q526-494 516-484t-10 24.27q0 13.73 9.92 23.73 9.91 10 24.08 10Zm-59.83 294q-72.17 0-135.73-27.39-63.56-27.39-110.57-74.35-47.02-46.96-74.44-110.43Q132-407.65 132-479.83q0-72.17 27.39-135.73 27.39-63.56 74.35-110.57 46.96-47.02 110.43-74.44Q407.65-828 479.83-828q72.17 0 135.73 27.39 63.56 27.39 110.57 74.35 47.02 46.96 74.44 110.43Q828-552.35 828-480.17q0 72.17-27.39 135.73-27.39 63.56-74.35 110.57-46.96 47.02-110.43 74.44Q552.35-132 480.17-132Zm-.17-28q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Z"/>
    </Icon>
  );
});

IconMaterialNoiseControlOnW100.displayName = 'OnesyIconMaterialNoiseControlOnW100';

export default IconMaterialNoiseControlOnW100;
