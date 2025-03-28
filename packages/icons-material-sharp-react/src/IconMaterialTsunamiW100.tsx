import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTsunamiW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TsunamiW100'

      short_name='Tsunami'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M106-148v-28q26-3 51-14.5t56-32.5q32 23 66.5 35.5T347-175q34 0 69.5-12t64.5-34q31 23 64.5 34.5T615-175q35 0 66-11t68-37q29 20 54 31.5t51 15.5v28q-24-3-50-12.5T749-187q-34 20-68 30.5T615-146q-32 0-66.5-11T480-188q-31 20-65 31t-68 11q-32 0-66-10.5T213-187q-26 15-53.5 25T106-148Zm0-128v-104q0-88 34-163t94.5-129.5q60.5-54.5 144-85T560-788q22 0 43.5 1.5T643-782q-14 28-21.5 58t-7.5 57q0 66 46.5 112.5T773-508h81v28h-81q-78 0-132.5-54.5T586-667q0-23 5.5-49.5T605-763q-101 16-166 86t-65 164q0 53 13.5 97.5T433-323q11-5 24-13.5t24-15.5q31 23 67 36t67 13q30 0 65.5-13t68.5-36q29 20 55 32t50 16v28q-21-3-46.5-13T749-318q-36 22-69.5 33T615-274q-29 0-65.5-12T481-318q-40 25-69.5 34.5T347-274q-35 0-65.5-9T213-315q-26 15-53.5 25T106-276Zm239-27q17 0 34-2.5t28-6.5q-33-53-47-99t-14-102q0-94 54-164t151-102v19q-91 2-168 31.5T251-649q-55 50-86 119t-31 150v66q20-4 41.5-14t37.5-21q35 25 65.5 35.5T345-303Zm-23-228Z"/>
    </Icon>
  );
});

IconMaterialTsunamiW100.displayName = 'OnesyIconMaterialTsunamiW100';

export default IconMaterialTsunamiW100;
