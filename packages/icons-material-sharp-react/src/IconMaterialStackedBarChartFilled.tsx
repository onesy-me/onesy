import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialStackedBarChartFilled = (props: IIcon) => {

  return (
    <Icon
      name='StackedBarChartFilled'

      short_name='StackedBarChart'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-160v-440h160v440H160Zm0-480v-160h160v160H160Zm240 480v-320h160v320H400Zm0-360v-160h160v160H400Zm240 360v-200h160v200H640Zm0-240v-160h160v160H640Z"/>
    </Icon>
  );
};

IconMaterialStackedBarChartFilled.displayName = 'OnesyIconMaterialStackedBarChartFilled';

export default IconMaterialStackedBarChartFilled;
