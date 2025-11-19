import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTooltipFilled = (props: IIcon) => {

  return (
    <Icon
      name='TooltipFilled'

      short_name='Tooltip'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-80 374-240H80v-640h800v640H586L480-80Z"/>
    </Icon>
  );
};

IconMaterialTooltipFilled.displayName = 'OnesyIconMaterialTooltipFilled';

export default IconMaterialTooltipFilled;
