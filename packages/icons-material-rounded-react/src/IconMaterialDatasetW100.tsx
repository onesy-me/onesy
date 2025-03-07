import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDatasetW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DatasetW100'

      short_name='Dataset'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M336-306h48q13 0 21.5-8.5T414-336v-48q0-13-8.5-21.5T384-414h-48q-13 0-21.5 8.5T306-384v48q0 13 8.5 21.5T336-306Zm240 0h48q13 0 21.5-8.5T654-336v-48q0-13-8.5-21.5T624-414h-48q-13 0-21.5 8.5T546-384v48q0 13 8.5 21.5T576-306ZM336-546h48q13 0 21.5-8.5T414-576v-48q0-13-8.5-21.5T384-654h-48q-13 0-21.5 8.5T306-624v48q0 13 8.5 21.5T336-546Zm240 0h48q13 0 21.5-8.5T654-576v-48q0-13-8.5-21.5T624-654h-48q-13 0-21.5 8.5T546-624v48q0 13 8.5 21.5T576-546ZM232-172q-26 0-43-17t-17-43v-496q0-26 17-43t43-17h496q26 0 43 17t17 43v496q0 26-17 43t-43 17H232Zm0-28h496q12 0 22-10t10-22v-496q0-12-10-22t-22-10H232q-12 0-22 10t-10 22v496q0 12 10 22t22 10Zm-32-560v560-560Z"/>
    </Icon>
  );
});

IconMaterialDatasetW100.displayName = 'OnesyIconMaterialDatasetW100';

export default IconMaterialDatasetW100;
