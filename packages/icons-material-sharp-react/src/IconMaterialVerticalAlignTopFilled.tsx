import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialVerticalAlignTopFilled = (props: IIcon) => {

  return (
    <Icon
      name='VerticalAlignTopFilled'

      short_name='VerticalAlignTop'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-760v-80h640v80H160Zm280 640v-408L336-424l-56-56 200-200 200 200-56 56-104-104v408h-80Z"/>
    </Icon>
  );
};

IconMaterialVerticalAlignTopFilled.displayName = 'OnesyIconMaterialVerticalAlignTopFilled';

export default IconMaterialVerticalAlignTopFilled;
