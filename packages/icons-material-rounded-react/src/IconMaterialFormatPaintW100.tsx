import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFormatPaintW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatPaintW100'

      short_name='FormatPaint'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M438-132q-11.55 0-19.77-8.23Q410-148.45 410-160v-223H273q-26 0-43.5-17T212-442v-259q0-35.89 26.14-61.44Q264.29-788 301-788h417q12.75 0 21.38 8.62Q748-770.75 748-758v316q0 25-18.21 42T686-383H549v223q0 11.55-8.22 19.77Q532.55-132 521-132h-83ZM240-536h480v-224h-73v131q0 5.95-4.04 9.97-4.03 4.03-10 4.03-5.96 0-9.96-4.03-4-4.02-4-9.97v-131h-84v64q0 5.95-4.04 9.97-4.03 4.03-10 4.03-5.96 0-9.96-4.03-4-4.02-4-9.97v-64H301q-26 0-43.5 16.5T240-701v165Zm33 125h413q14 0 24-9t10-22v-66H240v66q0 13 9.5 22t23.5 9Zm-33 0v-97 97Z"/>
    </Icon>
  );
});

IconMaterialFormatPaintW100.displayName = 'OnesyIconMaterialFormatPaintW100';

export default IconMaterialFormatPaintW100;
