import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCloudUploadFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CloudUploadFilled'

      short_name='CloudUpload'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440-160H260q-91 0-155.5-63T40-377q0-78 47-139t123-78q25-92 100-149t170-57q117 0 198.5 81.5T760-520q69 8 114.5 59.5T920-340q0 75-52.5 127.5T740-160H520v-286l64 62 56-56-160-160-160 160 56 56 64-62v286Z"/>
    </Icon>
  );
});

IconMaterialCloudUploadFilled.displayName = 'OnesyIconMaterialCloudUploadFilled';

export default IconMaterialCloudUploadFilled;
