import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialScatterPlotW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScatterPlotW100'

      short_name='ScatterPlot'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M668-184q-44.55 0-76.28-31.73Q560-247.45 560-292t31.72-76.27Q623.45-400 668-400t76.28 31.73Q776-336.55 776-292t-31.72 76.27Q712.55-184 668-184Zm0-28q33 0 56.5-23.5T748-292q0-33-23.5-56.5T668-372q-33 0-56.5 23.5T588-292q0 33 23.5 56.5T668-212Zm-376-92q-44.55 0-76.27-31.73Q184-367.45 184-412t31.73-76.27Q247.45-520 292-520t76.27 31.73Q400-456.55 400-412t-31.73 76.27Q336.55-304 292-304Zm0-28q33 0 56.5-23.5T372-412q0-33-23.5-56.5T292-492q-33 0-56.5 23.5T212-412q0 33 23.5 56.5T292-332Zm148-260q-44.55 0-76.27-31.72Q332-655.45 332-700t31.73-76.28Q395.45-808 440-808t76.28 31.72Q548-744.55 548-700t-31.72 76.28Q484.55-592 440-592Zm0-28q33 0 56.5-23.5T520-700q0-33-23.5-56.5T440-780q-33 0-56.5 23.5T360-700q0 33 23.5 56.5T440-620Zm228 328ZM292-412Zm148-288Z"/>
    </Icon>
  );
});

IconMaterialScatterPlotW100.displayName = 'OnesyIconMaterialScatterPlotW100';

export default IconMaterialScatterPlotW100;
