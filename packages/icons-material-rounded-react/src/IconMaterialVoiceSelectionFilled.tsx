import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialVoiceSelectionFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VoiceSelectionFilled'

      short_name='VoiceSelection'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M737-68q-17 0-28.5-11.5T697-108q0-8 3-16t8-13q43-43 67.5-99T800-358q0-65-24.5-121.5T708-579q-5-5-8-13t-3-16q0-17 11.5-28.5T737-648q8 0 15.5 3.5T765-636q54 54 84.5 125.5T880-358q0 82-30.5 153T765-80q-5 5-12.5 8.5T737-68ZM623-182q-17 0-28.5-11.5T583-222q0-8 3.5-15.5T595-250q21-21 33-48.5t12-59.5q0-32-12.5-59.5T595-466q-6-5-9-12.5t-3-15.5q0-17 11.5-28.5T623-534q8 0 16 3t13 9q32 32 50 74t18 90q0 48-18 90t-50 74q-5 6-13 9t-16 3ZM320-360h-80v11q0 35 21.5 61.5T316-252l12 3q40 10 45 50t-31 60q-51 29-107 42T120-81q-17 1-28.5-10.5T80-120q0-17 11.5-28.5T120-161q36-2 70.5-8.5T259-188q-46-23-72.5-66.5T160-349v-51q0-17 11.5-28.5T200-440h120v-80q0-17 11.5-28.5T360-560h95L342-786q-8-15-2.5-30.5T360-840q15-8 30.5-2.5T414-822l113 226q20 40-3 78t-68 38h-56v40q0 33-23.5 56.5T320-360Z"/>
    </Icon>
  );
});

IconMaterialVoiceSelectionFilled.displayName = 'OnesyIconMaterialVoiceSelectionFilled';

export default IconMaterialVoiceSelectionFilled;
