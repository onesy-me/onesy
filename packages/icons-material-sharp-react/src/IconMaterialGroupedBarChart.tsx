import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialGroupedBarChart = (props: IIcon) => {

  return (
    <Icon
      name='GroupedBarChart'

      short_name='GroupedBarChart'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-160v-480h160v480H160Zm200 0v-280h160v280H360Zm280 0v-640h160v640H640Z"/>
    </Icon>
  );
};

IconMaterialGroupedBarChart.displayName = 'OnesyIconMaterialGroupedBarChart';

export default IconMaterialGroupedBarChart;
