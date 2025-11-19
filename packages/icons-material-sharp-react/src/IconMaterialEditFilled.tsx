import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEditFilled = (props: IIcon) => {

  return (
    <Icon
      name='EditFilled'

      short_name='Edit'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-120v-170l585-583 167 171-582 582H120Zm584-528 56-56-56-56-56 56 56 56Z"/>
    </Icon>
  );
};

IconMaterialEditFilled.displayName = 'OnesyIconMaterialEditFilled';

export default IconMaterialEditFilled;
