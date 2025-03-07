import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDragPanW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DragPanW100Filled'

      short_name='DragPan'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M466-466H170l90 90q4 4 4.5 9.5T260-356q-5 5-10 5t-10-5L137-459q-5-5-7-10t-2-11q0-6 2-11t7-10l103-103q4-4 9.5-4.5T260-604q5 5 5 10t-5 10l-90 90h296v-296l-90 90q-4 4-9.5 4.5T356-700q-5-5-5-10t5-10l103-103q5-5 10-7t11-2q6 0 11 2t10 7l103 103q4 4 4.5 9.5T604-700q-5 5-10 5t-10-5l-90-90v296h296l-90-90q-4-4-4.5-9.5T700-604q5-5 10-5t10 5l103 103q5 5 7 10t2 11q0 6-2 11t-7 10L720-356q-4 4-9.5 4.5T700-356q-5-5-5-10t5-10l90-90H494v296l90-90q4-4 9.5-4.5T604-260q5 5 5 10t-5 10L501-137q-5 5-10 7t-11 2q-6 0-11-2t-10-7L356-240q-4-4-4.5-9.5T356-260q5-5 10-5t10 5l90 90v-296Z"/>
    </Icon>
  );
});

IconMaterialDragPanW100Filled.displayName = 'OnesyIconMaterialDragPanW100Filled';

export default IconMaterialDragPanW100Filled;
