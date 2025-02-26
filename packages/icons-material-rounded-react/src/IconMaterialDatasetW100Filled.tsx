import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDatasetW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DatasetW100Filled'

      short_name='Dataset'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M336-306h48q12.75 0 21.38-8.63Q414-323.25 414-336v-48q0-12.75-8.62-21.38Q396.75-414 384-414h-48q-12.75 0-21.37 8.62Q306-396.75 306-384v48q0 12.75 8.63 21.37Q323.25-306 336-306Zm240 0h48q12.75 0 21.38-8.63Q654-323.25 654-336v-48q0-12.75-8.62-21.38Q636.75-414 624-414h-48q-12.75 0-21.37 8.62Q546-396.75 546-384v48q0 12.75 8.63 21.37Q563.25-306 576-306ZM336-546h48q12.75 0 21.38-8.63Q414-563.25 414-576v-48q0-12.75-8.62-21.38Q396.75-654 384-654h-48q-12.75 0-21.37 8.62Q306-636.75 306-624v48q0 12.75 8.63 21.37Q323.25-546 336-546Zm240 0h48q12.75 0 21.38-8.63Q654-563.25 654-576v-48q0-12.75-8.62-21.38Q636.75-654 624-654h-48q-12.75 0-21.37 8.62Q546-636.75 546-624v48q0 12.75 8.63 21.37Q563.25-546 576-546ZM232-172q-26 0-43-17t-17-43v-496q0-26 17-43t43-17h496q26 0 43 17t17 43v496q0 26-17 43t-43 17H232Z"/>
    </Icon>
  );
});

IconMaterialDatasetW100Filled.displayName = 'OnesyIconMaterialDatasetW100Filled';

export default IconMaterialDatasetW100Filled;
