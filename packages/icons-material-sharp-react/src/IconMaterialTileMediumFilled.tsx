import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTileMediumFilled = (props: IIcon) => {

  return (
    <Icon
      name='TileMediumFilled'

      short_name='TileMedium'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-200v-240h320v240H120Zm400 0v-240h320v240H520ZM120-520v-240h720v240H120Z"/>
    </Icon>
  );
};

IconMaterialTileMediumFilled.displayName = 'OnesyIconMaterialTileMediumFilled';

export default IconMaterialTileMediumFilled;
