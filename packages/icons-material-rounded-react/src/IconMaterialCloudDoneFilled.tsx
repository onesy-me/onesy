import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCloudDoneFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CloudDoneFilled'

      short_name='CloudDone'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m413-395-56-56q-12-12-28-12t-28 12q-12 12-12 28.5t12 28.5l85 86q12 12 28 12t28-12l169-169q12-12 12-29t-12-29q-12-12-29-12t-29 12L413-395ZM260-160q-91 0-155.5-63T40-377q0-78 47-139t123-78q25-92 100-149t170-57q117 0 198.5 81.5T760-520q69 8 114.5 59.5T920-340q0 75-52.5 127.5T740-160H260Z"/>
    </Icon>
  );
});

IconMaterialCloudDoneFilled.displayName = 'OnesyIconMaterialCloudDoneFilled';

export default IconMaterialCloudDoneFilled;
