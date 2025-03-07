import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMixtureMedW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MixtureMedW100Filled'

      short_name='MixtureMed'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M296-312h-44q-24.75 0-42.37-17.63Q192-347.25 192-372v-288h-14q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h118v-72h-36q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h100q5.95 0 9.98 4.04 4.02 4.03 4.02 10 0 5.96-4.02 9.96-4.03 4-9.98 4h-36v72h118q5.95 0 9.98 4.04 4.02 4.03 4.02 10 0 5.96-4.02 9.96-4.03 4-9.98 4h-14v288q0 24.75-17.62 42.37Q392.75-312 368-312h-44v155q0 4.5-4 6.75t-8-.75l-10.4-8q-2.6-2-4.1-5.08-1.5-3.07-1.5-6.92v-141Zm353.77 148q-48.77 0-83.27-34.66Q532-233.32 532-282v-268q0-48.67 34.73-83.34Q601.46-668 650.23-668t83.27 34.66Q768-598.67 768-550v268q0 48.68-34.73 83.34Q698.54-164 649.77-164ZM252-340h116q14 0 23-9t9-23v-56h-80q-5.6 0-9.8-4.2-4.2-4.2-4.2-9.8 0-5.6 4.2-9.8 4.2-4.2 9.8-4.2h80v-88h-80q-5.6 0-9.8-4.2-4.2-4.2-4.2-9.8 0-5.6 4.2-9.8 4.2-4.2 9.8-4.2h80v-88H220v288q0 14 9 23t23 9Zm308 4h180v-160H560v160Z"/>
    </Icon>
  );
});

IconMaterialMixtureMedW100Filled.displayName = 'OnesyIconMaterialMixtureMedW100Filled';

export default IconMaterialMixtureMedW100Filled;
