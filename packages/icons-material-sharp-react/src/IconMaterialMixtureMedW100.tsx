import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMixtureMedW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MixtureMedW100'

      short_name='MixtureMed'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m324-142-28-21v-149h-44q-24.75 0-42.37-17.63Q192-347.25 192-372v-288h-28v-28h132v-72h-50v-28h128v28h-50v72h132v28h-28v288q0 24.75-17.62 42.37Q392.75-312 368-312h-44v170Zm325.77-22q-48.77 0-83.27-34.66Q532-233.32 532-282v-268q0-48.67 34.73-83.34Q601.46-668 650.23-668t83.27 34.66Q768-598.67 768-550v268q0 48.68-34.73 83.34Q698.54-164 649.77-164ZM252-340h116q14 0 23-9t9-23v-56h-94v-28h94v-88h-94v-28h94v-88H220v288q0 14 9 23t23 9Zm398.5-300q-37.5 0-64 26T560-550v26h180v-26q0-38-26-64t-63.5-26ZM560-336h180v-160H560v160Zm90 144q38 0 64-26.44T740-282v-26H560v26q0 37.12 26.44 63.56Q612.88-192 650-192Zm0-332Zm0 216Z"/>
    </Icon>
  );
});

IconMaterialMixtureMedW100.displayName = 'OnesyIconMaterialMixtureMedW100';

export default IconMaterialMixtureMedW100;
