import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCloudUploadW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CloudUploadW100'

      short_name='CloudUpload'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m466-512-81 81q-3.75 4-9.37 4-5.63 0-9.63-4-5-4-4.5-10t4.5-10l93-93q9-9 21-9t21 9l93 93q4 4 4.5 9.89.5 5.9-4.5 10.18-4 3.93-10 3.43t-10-4.5l-80-80v240q0 12 10 22t22 10h214q42 0 71-29t29-71q0-42-29-71t-71-29h-60v-80q0-83-58.5-141.5T480-720q-83 0-141.5 58.5T280-520h-22q-55 0-96.5 41T120-380q0 58 41 99t99 41h86q5.95 0 9.98 4.04 4.02 4.03 4.02 10 0 5.96-4.02 9.96-4.03 4-9.98 4h-86q-70 0-119-48.77Q92-309.55 92-380q0-69 49.5-118.5T254-548q10-86 74.5-143T480-748q95.27 0 161.64 66.36Q708-615.27 708-520v52h32q54 0 91 37t37 91q0 54-36 91t-90 37H526q-26 0-43-17t-17-43v-240Zm14 46Z"/>
    </Icon>
  );
});

IconMaterialCloudUploadW100.displayName = 'OnesyIconMaterialCloudUploadW100';

export default IconMaterialCloudUploadW100;
