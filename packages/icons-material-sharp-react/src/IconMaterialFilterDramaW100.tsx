import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFilterDramaW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FilterDramaW100'

      short_name='FilterDrama'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M260-212q-70 0-119-49T92-380q0-63 45-115t117-53q11-91 77-145.5T480-748q95 0 161.5 66T708-520v52h32q53 0 90.5 37t37.5 90q0 54-37 91.5T740-212H260Zm0-28h480q42 0 71-29t29-71q0-42-29-71t-71-29h-60v-80q0-83-58.5-141.5T480-720q-72 0-129.5 48T282-547q58 9 102 53.5T428-380h-28q0-58-41-99t-99-41q-58 0-99 41t-41 99q0 58 41 99t99 41Z"/>
    </Icon>
  );
});

IconMaterialFilterDramaW100.displayName = 'OnesyIconMaterialFilterDramaW100';

export default IconMaterialFilterDramaW100;
