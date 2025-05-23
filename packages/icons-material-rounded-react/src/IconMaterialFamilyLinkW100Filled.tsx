import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFamilyLinkW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FamilyLinkW100Filled'

      short_name='FamilyLink'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M393-66q-42 0-76.5-25T271-156q-8-31-26.5-55.5T196-236q-19 0-36.5 9T130-204q-2 2-4.5 3.5T120-199q-6 0-10-4t-4-10q0-2 .5-4.5t2.5-4.5q16-20 38.5-31t48.5-11q39 0 65 30.5t37 69.5q9 31 36 50.5T393-94q29 0 50.5-17.5T481-152l2-3-261-382q-5-8-7.5-17t-2.5-18q0-11 4.5-22t12.5-20l232-238q8-8 18-12.5t21-4.5q11 0 21 4.5t18 12.5l232 238q8 9 12.5 20t4.5 22q0 9-2.5 18t-7.5 17L510-145q-25 38-54 58.5T393-66Z"/>
    </Icon>
  );
});

IconMaterialFamilyLinkW100Filled.displayName = 'OnesyIconMaterialFamilyLinkW100Filled';

export default IconMaterialFamilyLinkW100Filled;
