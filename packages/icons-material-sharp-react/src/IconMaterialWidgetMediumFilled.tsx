import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWidgetMediumFilled = (props: IIcon) => {

  return (
    <Icon
      name='WidgetMediumFilled'

      short_name='WidgetMedium'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-80v-240h240v240H80Zm280 0v-240h240v240H360Zm280 0v-240h240v240H640ZM80-360v-240h240v240H80Zm280 0v-240h240v240H360Zm280 0v-240h240v240H640ZM80-640v-240h520v240H80Zm560 0v-240h240v240H640Z"/>
    </Icon>
  );
};

IconMaterialWidgetMediumFilled.displayName = 'OnesyIconMaterialWidgetMediumFilled';

export default IconMaterialWidgetMediumFilled;
