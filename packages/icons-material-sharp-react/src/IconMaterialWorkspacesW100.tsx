import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWorkspacesW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WorkspacesW100'

      short_name='Workspaces'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-160q-49.5 0-84.75-35.25T120-280q0-49.5 35.25-84.75T240-400q49.5 0 84.75 35.25T360-280q0 49.5-35.25 84.75T240-160Zm480 0q-49.5 0-84.75-35.25T600-280q0-49.5 35.25-84.75T720-400q49.5 0 84.75 35.25T840-280q0 49.5-35.25 84.75T720-160Zm-479.96-28Q278-188 305-215.04q27-27.03 27-65Q332-318 304.96-345q-27.03-27-65-27Q202-372 175-344.96q-27 27.03-27 65Q148-242 175.04-215q27.03 27 65 27Zm480 0Q758-188 785-215.04q27-27.03 27-65Q812-318 784.96-345q-27.03-27-65-27Q682-372 655-344.96q-27 27.03-27 65Q628-242 655.04-215q27.03 27 65 27ZM480-560q-49.5 0-84.75-35.25T360-680q0-49.5 35.25-84.75T480-800q49.5 0 84.75 35.25T600-680q0 49.5-35.25 84.75T480-560Zm.04-28Q518-588 545-615.04q27-27.03 27-65Q572-718 544.96-745q-27.03-27-65-27Q442-772 415-744.96q-27 27.03-27 65Q388-642 415.04-615q27.03 27 65 27Zm-.04-92Zm240 400Zm-480 0Z"/>
    </Icon>
  );
});

IconMaterialWorkspacesW100.displayName = 'OnesyIconMaterialWorkspacesW100';

export default IconMaterialWorkspacesW100;
