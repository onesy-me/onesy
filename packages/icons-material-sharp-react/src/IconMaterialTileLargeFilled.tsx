import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTileLargeFilled = (props: IIcon) => {

  return (
    <Icon
      name='TileLargeFilled'

      short_name='TileLarge'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-120v-240h320v240H120Zm400 0v-240h320v240H520ZM120-440v-400h720v400H120Z"/>
    </Icon>
  );
};

IconMaterialTileLargeFilled.displayName = 'OnesyIconMaterialTileLargeFilled';

export default IconMaterialTileLargeFilled;
