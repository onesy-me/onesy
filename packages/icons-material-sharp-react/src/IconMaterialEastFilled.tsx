import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEastFilled = (props: IIcon) => {

  return (
    <Icon
      name='EastFilled'

      short_name='East'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m600-200-57-56 184-184H80v-80h647L544-704l56-56 280 280-280 280Z"/>
    </Icon>
  );
};

IconMaterialEastFilled.displayName = 'OnesyIconMaterialEastFilled';

export default IconMaterialEastFilled;
