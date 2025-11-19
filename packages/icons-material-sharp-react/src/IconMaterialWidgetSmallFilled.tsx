import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWidgetSmallFilled = (props: IIcon) => {

  return (
    <Icon
      name='WidgetSmallFilled'

      short_name='WidgetSmall'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-80v-240h240v240H80Zm280 0v-240h240v240H360Zm280 0v-240h240v240H640ZM80-360v-240h240v240H80Zm280 0v-240h240v240H360Zm280 0v-240h240v240H640ZM80-640v-240h240v240H80Zm280 0v-240h240v240H360Zm280 0v-240h240v240H640Z"/>
    </Icon>
  );
};

IconMaterialWidgetSmallFilled.displayName = 'OnesyIconMaterialWidgetSmallFilled';

export default IconMaterialWidgetSmallFilled;
