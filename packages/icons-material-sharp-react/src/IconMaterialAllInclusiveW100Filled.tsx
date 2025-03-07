import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAllInclusiveW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AllInclusiveW100Filled'

      short_name='AllInclusive'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M220-286q-81.13 0-137.56-56.41Q26-398.82 26-479.91T82.44-617.5Q138.87-674 220-674q31.71 0 60.86 11.5Q310-651 334-630l90 76-22 18-86-74q-20-16.8-45-26.4-25-9.6-51.07-9.6-68.74 0-117.34 48.66Q54-548.68 54-479.84t48.59 117.34q48.6 48.5 117.34 48.5 26.07 0 51.07-9.6t45-26.4l310-280q23-22 52.47-33 29.46-11 61.53-11 81.13 0 137.56 56.41Q934-561.18 934-480.09T877.56-342.5Q821.13-286 740-286q-32 0-60.5-12T626-330l-88-76 20-19 86 75q20 18 45 27t51.07 9q68.74 0 117.34-48.66Q906-411.32 906-480.16T857.41-597.5Q808.81-646 740.07-646 714-646 689-636.4T644-610L334-330q-23 22-52.47 33-29.46 11-61.53 11Z"/>
    </Icon>
  );
});

IconMaterialAllInclusiveW100Filled.displayName = 'OnesyIconMaterialAllInclusiveW100Filled';

export default IconMaterialAllInclusiveW100Filled;
