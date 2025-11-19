import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBarChart = (props: IIcon) => {

  return (
    <Icon
      name='BarChart'

      short_name='BarChart'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><g><rect height="11" width="4" x="4" y="9"/><rect height="7" width="4" x="16" y="13"/><rect height="16" width="4" x="10" y="4"/></g></g>
    </Icon>
  );
};

IconMaterialBarChart.displayName = 'OnesyIconMaterialBarChart';

export default IconMaterialBarChart;
