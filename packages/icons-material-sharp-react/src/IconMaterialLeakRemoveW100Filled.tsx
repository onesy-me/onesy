import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLeakRemoveW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LeakRemoveW100Filled'

      short_name='LeakRemove'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M808-112 642-278q-15 21-24.5 47.5T608-172h-28q0-36 10.5-66.5T622-298l-94-94q-33 39-56.5 95.5T448-172h-28q0-72 23.5-132T508-412l-96-96q-54 44-112.5 66T172-420v-28q60 0 117.5-21T392-528l-94-94q-27 21-59 31.5T172-580v-28q30 0 58-9.5t48-24.5L112-808l20-20 696 696-20 20Zm-77-230-22-22q15-8 36.5-12t42.5-4v28q-15 0-29.5 2.5T731-342ZM611-462l-21-21q48-29 96-43t102-14v28q-53 1-95.5 14T611-462ZM483-590l-21-21q26-41 38-85.5t12-91.5h28q0 56-15 104.5T483-590ZM365-708l-22-22q5-14 7-28.5t2-29.5h28q0 23-3.5 42T365-708Z"/>
    </Icon>
  );
});

IconMaterialLeakRemoveW100Filled.displayName = 'OnesyIconMaterialLeakRemoveW100Filled';

export default IconMaterialLeakRemoveW100Filled;
