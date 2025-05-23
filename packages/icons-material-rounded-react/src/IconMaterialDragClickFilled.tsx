import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDragClickFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DragClickFilled'

      short_name='DragClick'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-240q-71 0-130.5-37.5T261-380q-6-14 0-28t21-20q15-7 31.5-.5T338-405q21 39 59 62t83 23q66 0 113-47t47-113q0-45-23.5-82.5T554-621q-16-8-22-24.5t1-31.5q7-15 20.5-21t27.5 0q63 29 101 88.5T720-480q0 100-70 170t-170 70Zm0 160q-158 0-274-107T79-450q-1-16 9.5-28t27.5-13q17-1 30.5 10.5T162-451q16 124 107.5 207.5T480-160q134 0 227-93t93-227q0-125-83-215.5T508-798q-18-2-29.5-15T468-843q1-17 13-28t28-10q78 5 145.5 39T772-753.5q50 54.5 79 125T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm-98-420L250-631l-30 91q-5 14-19 13.5T182-541L91-844q-4-12 4.5-20.5T116-869l303 91q14 5 14.5 19T420-740l-91 30 132 132q17 17 17 39t-17 39q-17 17-39.5 17T382-500Z"/>
    </Icon>
  );
});

IconMaterialDragClickFilled.displayName = 'OnesyIconMaterialDragClickFilled';

export default IconMaterialDragClickFilled;
